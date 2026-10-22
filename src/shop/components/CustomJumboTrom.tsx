import React from 'react'
import { Button } from '../../components/ui/button'


interface Props {

  title  :string,
  subTitle?  :string
}

export const CustomJumboTrom = ({title, subTitle}: Props) => {


  const altSubtitle= "Subtitulo alternativo";

  return (

     <section className="py-16 px-4 lg:px-8 bg-muted/30">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-light tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
           {subTitle || altSubtitle}
          </p>
          <Button size="lg" className="rounded-full px-8">
            Explorar Colección
          </Button>
        </div>
      </section>

  )
}
