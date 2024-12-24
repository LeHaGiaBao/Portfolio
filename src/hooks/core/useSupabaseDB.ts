/* eslint-disable @typescript-eslint/no-explicit-any */
import {supabase} from '@/services/supabase';
import {PostgrestError} from '@supabase/supabase-js';
import {useCallback, useState} from 'react';

interface SupabaseDB<T> {
  table: string;
  select?: string;
  defaultValue?: T[];
}

export const useSupabaseDB = <T extends {id: number | string}>(options: SupabaseDB<T>) => {
  const {table, select = '*', defaultValue = []} = options;
  const [data, setData] = useState<T[]>(defaultValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<PostgrestError | null>(null);

  // List all records
  const getAll = useCallback(
    async (filters?: Record<string, any>) => {
      try {
        setLoading(true);
        setError(null);

        let query = supabase.from(table).select(select);

        // Apply filters if provided
        if (filters) {
          Object.entries(filters).forEach(([key, value]) => {
            query = query.eq(key, value);
          });
        }

        const {data: result, error} = await query;

        if (error) throw error;
        setData(result as unknown as T[]);
        return result as unknown as T[];
      } catch (err) {
        setError(err as PostgrestError);
        return [];
      } finally {
        setLoading(false);
      }
    },
    [table, select]
  );

  // Get single record
  const getById = useCallback(
    async (id: number | string) => {
      try {
        setLoading(true);
        setError(null);

        const {data: result, error} = await supabase
          .from(table)
          .select(select)
          .eq('id', id)
          .single();

        if (error) throw error;
        return result as unknown as T;
      } catch (err) {
        setError(err as PostgrestError);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [table, select]
  );

  // Create record
  const create = useCallback(
    async (newRecord: Omit<T, 'id'>) => {
      try {
        setLoading(true);
        setError(null);

        const {data: result, error} = await supabase
          .from(table)
          .insert(newRecord)
          .select(select)
          .single();

        if (error) throw error;
        setData((prev) => [...prev, result as unknown as T]);
        return result as unknown as T;
      } catch (err) {
        setError(err as PostgrestError);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [table, select]
  );

  // Update record
  const update = useCallback(
    async (id: number | string, updates: Partial<T>) => {
      try {
        setLoading(true);
        setError(null);

        const {data: result, error} = await supabase
          .from(table)
          .update(updates)
          .eq('id', id)
          .select(select)
          .single();

        if (error) throw error;
        setData((prev) =>
          prev.map((item) => (item.id === id ? ({...item, ...(result as object)} as T) : item))
        );
        return result as unknown as T;
      } catch (err) {
        setError(err as PostgrestError);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [table, select]
  );

  // Delete record
  const remove = useCallback(
    async (id: number | string) => {
      try {
        setLoading(true);
        setError(null);

        const {error} = await supabase.from(table).delete().eq('id', id);

        if (error) throw error;
        setData((prev) => prev.filter((item) => item.id !== id));
        return true;
      } catch (err) {
        setError(err as PostgrestError);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [table]
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
