import TopMenu from "../component/topmenu";
import BannerMainPage from "../component/banner";
import Description from "../component/description";
import Card from "../component/card";
import Footer from "../component/footer";

export default async function Home() {
  return (
    <>
      <TopMenu />
      <BannerMainPage />
      <Description />
      <Card />
      <Footer />
    </>
  );
}
