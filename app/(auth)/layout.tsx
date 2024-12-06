import Image from 'next/image'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
        <section className="bg-brand p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5">
            <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
                <Image
                 src="/favicon.ico" 
                 alt="logo"
                  width={160}
                   height={82}
                    className="h-auto"
                    />

                    <div className="space-y-5 text-white">
                        <h1 className='h1'>Лучшее приложения для выбора вашего пути</h1>
                        <p className="body-1">
                            Это место где вы можете найти самые интересные места
                        </p>
                    </div>
                    <Image 
                    src="/illustration.png" alt="Map" width={500} height={342} className="transition-all hover:rotate-2 hover:scale-105"/>
            </div>
        </section>

        <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
            <Image 
            src="/favicon.ico" 
            alt="logo"
             width={224}
              height={82}
               className="h-auto w-[200px] lg:w-[250px]"
            />
        </div>
        {children}
        </section>
        </div>
  )
}

export default layout