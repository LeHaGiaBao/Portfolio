import {db} from '@/services/firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  QueryConstraint,
  updateDoc,
  WithFieldValue,
} from 'firebase/firestore';
import {useCallback, useState} from 'react';

interface FirebaseDB<T> {
  data: T[];
  loading: boolean;
  error: Error | null;
  getAll: (constraints?: QueryConstraint[]) => Promise<void>;
  getById: (id: string) => Promise<T | null>;
  create: (data: Omit<T, 'id'>) => Promise<string>;
  update: (id: string, data: Partial<T>) => Promise<void>;
  remove: (id: string) => Promise<void>;
}

export const useFirebaseDB = <T extends DocumentData>(collectionName: string): FirebaseDB<T> => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // List all records
  const getAll = useCallback(
    async (constraints: QueryConstraint[] = []) => {
      try {
        setLoading(true);
        setError(null);
        const collectionRef = collection(db, collectionName);
        const q = query(collectionRef, ...constraints);
        const snapshot = await getDocs(q);
        const documents = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as unknown as T[];
        setData(documents);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    },
    [collectionName]
  );

  // Get single record
  const getById = useCallback(
    async (id: string) => {
      try {
        setLoading(true);
        setError(null);
        const docRef = doc(db, collectionName, id);
        const snapshot = await getDoc(docRef);
        if (!snapshot.exists()) return null;
        return {id: snapshot.id, ...snapshot.data()} as unknown as T;
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        return null;
      } finally {
        setLoading(false);
      }
    },
    [collectionName]
  );

  // Create record
  const create = useCallback(
    async (newData: WithFieldValue<Omit<T, 'id'>>) => {
      try {
        setLoading(true);
        setError(null);
        const collectionRef = collection(db, collectionName);
        const docRef = await addDoc(collectionRef, newData);
        await getAll();
        return docRef.id;
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [collectionName, getAll]
  );

  // Update record
  const update = useCallback(
    async (id: string, updateData: WithFieldValue<Partial<T>>) => {
      try {
        setLoading(true);
        setError(null);
        const docRef = doc(db, collectionName, id);
        await updateDoc(docRef, updateData as DocumentData);
        await getAll();
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [collectionName, getAll]
  );

  // Delete record
  const remove = useCallback(
    async (id: string) => {
      try {
        setLoading(true);
        setError(null);
        const docRef = doc(db, collectionName, id);
        await deleteDoc(docRef);
        await getAll();
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [collectionName, getAll]
  );

  return {
    data,
    loading,
    error,
    getAll,
    getById,
    create,
    update,
    remove,
  };
};
