import { QuoteIcon } from "@radix-ui/react-icons";
import React from "react";
import QuoteStyle from "../assets/sass/Quotes.module.scss";

export default function Quotes() {
  return (
    <div className={QuoteStyle.outer}>
      <div className={QuoteStyle.inner}>
        {/* <QuoteIcon className={QuoteStyle.icon} /> */}
        <qoute className={QuoteStyle.quote}>
          Development is not just about writing code; it's a journey of
          perpetual learning and innovation, where each challenge is a stepping
          stone to mastery
          <div>
            <i>- Meeta Ahluwalia</i>
          </div>
        </qoute>
      </div>
    </div>
  );
}
