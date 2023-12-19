import { NextPageWithLayout } from "./_app"
import HomePage from "@/src/pages-flat/HomePage"
import { ReactElement } from "react"
import DefaultLayout from "@/src/widgets/Layouts/DefaultLayout"
import { NextSeo } from "next-seo"

interface PageProps {}

const Page: NextPageWithLayout<PageProps> = () => {
  return (
    <>
      <NextSeo
        title="Главная"
        description="Описание"
        additionalMetaTags={[
          {
            property: "keywords",
            content: "Ключевые слова",
          },
        ]}
      />
      <HomePage />
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Page
