import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Inter-telco`, `tecnología`, `tráfico`]} />
    <Link to="/page-2/">Servicios</Link>

    <h1>Bienvenido to Inter-telco </h1>
    <p>
      Inter-telco es una empresa dedicada al desarrollo de herramientas
      tenológicas tales como desarrollo de software,suministros de servicios y
      soluciones a la medida que incluyen tanto hardware como software,
      adaptándolas al entorno de nuestros clientes, produciendo servicios de
      alto valor agregado.
    </p>
    <p>
      Inter-Telco fue fundada en el año 2010 y tiene como eje central tres
      pilares fundamentales: Investigacióón, Desarrollo e Innovación.
    </p>
    <p>
      Proveemos importantes soluciones para el sector militar, movilidad
      inteligente y desarrollo de sistemas que soportan las plataformas de
      Ciudades Inteligentes, tales como sistemas de víídeo analitica, sistemas
      de Big Data Kratoss, integracióón y análisis de redes sociales como Waze y
      Twitter, sistemas para bicicletas públicas, entre otras soluciones.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
