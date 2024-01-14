import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"

interface ComponentProps { }

const PublicHeader: FC<ComponentProps> = () => {
  const router = useRouter();
  return (
    <div className="container space-y-5">
      <div>
        <span>{router.locale}</span>
        <select onChange={e => router.push("/", undefined, { locale: e.target.value })
        }>{router.locales?.map(item => {
          return (<option key={item}>{item}</option>)
        })}</select>
      </div>
      <header className=" flex items-center space-x-4">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/profile">profile</Link>
      </header>
    </div>
  )
}

export default PublicHeader
