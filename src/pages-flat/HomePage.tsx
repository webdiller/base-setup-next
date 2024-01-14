import React, { FC, useState, useTransition } from "react"
import { SharedModal } from "../shared/ui/SharedModal"
import { useTranslations } from "next-intl"

interface ComponentProps {}

const HomePage: FC<ComponentProps> = () => {
  const [isActive, setIsActive] = useState(false)
  const toggle = () => setIsActive((prev) => !prev)
  const t = useTranslations("Index")
  return (
    <>
      <div className="container">
        <form action="">
          <button
            type="button"
            onClick={toggle}>
            button
          </button>
          <input
            type="text"
            placeholder="text"
          />
          <textarea
            name=""
            placeholder="textarea"></textarea>
          <input type="checkbox" />
          <input
            type="file"
            name=""
            id=""
          />
          <input
            type="radio"
            name=""
            id=""
          />
          <input
            type="range"
            name=""
            id=""
          />
        </form>

        <div>
          <p className="text-12">{t("title")}</p>
          <p className="text-14">{t("title")}</p>
          <p className="text-16">{t("title")}</p>
          <p className="text-18">{t("title")}</p>
          <p className="text-20">{t("title")}</p>
          <p className="text-22">{t("title")}</p>
          <p className="text-24">{t("title")}</p>
          <p className="text-26">{t("title")}</p>
          <p className="text-28">{t("title")}</p>
          <p className="text-30">{t("title")}</p>
        </div>
      </div>

      <SharedModal
        updateHandler={toggle}
        isActive={isActive}
        content={
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium vero ea sit praesentium laborum dolorum, libero architecto dolor officiis aperiam rerum, maiores magni ullam itaque
            sapiente cumque! Expedita, optio veritatis?
          </div>
        }
      />
    </>
  )
}

export default HomePage
