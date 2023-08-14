import React from "react";

interface Service{
    title: string,
    icon: string,
    showBorder?: boolean,
    desc?: string
}

interface Features{
  title: string,
  desc?: string,
  className?: string
}

const CardService = (props: Service) => {
  const cardClasses = `px-12 py-10 text-left shadow rounded-3xl ${
    props.showBorder ? 'border border-primary' : ''
  }`;
  const description = props.desc || "Ideal for members who need a productive space to work.";
  return (
    <div className={cardClasses}>
      <img src={props.icon} alt="" />
      <h2>{props.title}</h2>
      <p className="my-4">{description}</p>
      <div className="flex gap-2 items-center">
        <span className="font-semibold text-primary">Learn More</span>
        <ion-icon name="arrow-forward-circle" color="primary"></ion-icon>
      </div>
    </div>
  );
};

const CardFeatures = (props: Features) => {
  const cardClasses = `px-11 py-8 rounded-3xl shadow ${props.className || ''}`;
  return(
    <div className={cardClasses}>
      <h2>{props.title}</h2>
      {props.desc && <p style={{ display: props.desc ? 'block' : 'none' }}>{props.desc}</p>}
    </div>
  )
}

export { CardService, CardFeatures };