import React, { Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../api";
import { requiredAuth } from "../../utils";

export async function loader({ request }) {
  await requiredAuth(request);
  return defer({ vans: getHostVans() });
}

function Vans() {
  const dataPromise = useLoaderData();

  function renderHostVans(vans) {
    const hostVansEls = vans.map((van) => (
      <Link to={van.id} key={van.id} className="host-van-link-wrapper">
        <div className="host-van-single" key={van.id}>
          <img src={van.imageUrl} alt="none" />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    ));
    return (
      <div className="host-vans-list">
        <section>{hostVansEls}</section>
      </div>
    );
  }

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <Suspense fallback={<h2>Loading Vans...</h2>}>
        <Await resolve={dataPromise.vans}>{renderHostVans}</Await>
      </Suspense>
    </section>
  );
}

export default Vans;
