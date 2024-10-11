import React from 'react'
import ExpCardStyle from '../assets/sass/ExpCards.module.scss'

export default function ExpCards({ data, title }) {
  return (
    <div className={ExpCardStyle.outer}>
      <div className={ExpCardStyle.outer_title}>{title}</div>
      {
        data.map((item, index) => 
          <div key={index} className={ExpCardStyle.div}>
        <div className={ExpCardStyle.progress_bar}>
          <span className={ExpCardStyle.progress_dot}></span>
          <span className={ExpCardStyle.progress_line}></span>
        </div>
        <div className={ExpCardStyle.card}>
          <span className={ExpCardStyle.title}>{item.title}</span>
          <span className={ExpCardStyle.subtitle}>{item.subTitle}</span>
          <span className={ExpCardStyle.content}>{item.content}</span>
        </div>
      </div>
        )
      }
    </div>
  )
}
