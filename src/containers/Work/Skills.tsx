import React, { useState } from 'react'
import Title from '@/components/Skills/Title'
import SkillBlock from '@/components/Skills/SkillBlock'
import { skills } from "@/data/skills"

export default function Skills() {
	return (
		<>
			<section className='py-10'>
				<div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
					{
						skills.map(({ id, title, children1 }) => {
							return (
								<div key={id} >
									<Title title={title} />
									{
										children1?.map(({ subId, sub, children2 }) => {
											return (
												<div key={subId} >
													<p className="text-xl font-bold leading-tight text-gray-900 dark:text-gray-300 my-7">
														{sub}
													</p>
													<div className='grid grid-cols-1 gap-6 px-4 sm:px-0 xl:grid-cols-4 sm:grid-cols-2'>
														{
															children2.map(({ id, image, name }) => {
																return (
																	<SkillBlock key={id} image={image} name={name} />
																)
															})
														}
													</div>
												</div>
											)
										}
										)
									}
								</div>
							)
						}
						)
					}
				</div>
			</section>
		</>
	)
}