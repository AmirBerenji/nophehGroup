import BannerMainPage from "../component/banner";
import Description from "../component/description";
import Card from "../component/card";

export default async function Home() {
  return (
    <>
      <BannerMainPage />
      <Description />
      <Card />
    </>
  );
}
