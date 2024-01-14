import { NextPageWithLayout } from "./_app"
import HomePage from "@/src/pages-flat/HomePage"
import { ReactElement } from "react"
import DefaultLayout from "@/src/widgets/Layouts/DefaultLayout"
import { NextSeo } from "next-seo"
import { GetStaticPropsContext } from "next"
import { useTranslations } from "next-intl"

interface PageProps {
  messages: any
}

const Page: NextPageWithLayout<PageProps> = ({ messages }) => {
  const t = useTranslations('Index');
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

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Page
