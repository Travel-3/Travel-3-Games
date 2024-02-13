import { Provider, useProvider } from "@/apps/singleDog/Provider";
import RewardBox from "@/apps/singleDog/components/RewardBox";
import StartButton from "@/apps/singleDog/components/StartButton";
import App from "@/components/App";
import Meta from "@/components/Meta";
import { AspectRatio } from "@/components/ui";
import { withProvider } from "@/utils/withProvider";
import Image from "next/image";
import styled from "styled-components";
import dynamic from "next/dynamic";
import ShareButton from "@/apps/singleDog/components/ShareButton";

const SurverPage = dynamic(() => import("@/apps/singleDog/pages/SurveryPage"), {
  ssr: false,
});
const ResultPage = dynamic(() => import("@/apps/singleDog/pages/ResultPage"), {
  ssr: false,
});

const StarForeground = styled.div`
  background-image: url("/single-dog/svg/stars.svg");
  background-repeat: repeat-y;
`;

const PinkBackground = styled.div`
  background-color: #ff9dd3;
`;

const AzureBackground = styled.div`
  background-color: #8fadf5;
`;

const RuleBox = styled.div`
  box-shadow: 8px 8px 0px #000;
  background-color: #ff9dd3;
  /* border-radius: 8px; */
`;

function Page() {
  const { index, score, rank } = useProvider();

  if (index >= 1 && index < 12) {
    return (
      <App>
        <AzureBackground className="h-screen">
          <SurverPage />
        </AzureBackground>
      </App>
    );
  }

  if (index >= 12) {
    return (
      <App>
        <AzureBackground className="h-screen">
          <ResultPage />
        </AzureBackground>
      </App>
    );
  }
  return (
    <>
      <Meta
        slug="manshokuya"
        title="玩扭蛋遊戲送您「萬食屋折扣優惠」和生可樂 "
        description="玩扭蛋遊戲送您「萬食屋折扣優惠」和生可樂 "
        themeColor="#FACD00"
      />
      <App>
        <PinkBackground className="relative">
          <div className="absolute top-3 left-3 w-32 z-10">
            <AspectRatio ratio={2048 / 785}>
              <Image
                src={"/single-dog/images/travel3.png"}
                alt="Travel3"
                fill
                priority
              />
            </AspectRatio>
          </div>
          <div className="p-6">
            <AspectRatio ratio={2048 / 1605}>
              <Image
                src={"/single-dog/images/heart.png"}
                alt="heart"
                fill
                priority
              />
            </AspectRatio>
          </div>
        </PinkBackground>
        <StarForeground className="absolute top-0 left-0 bottom-0 right-0 select-none z-0" />
        <AzureBackground>
          <div className="px-4 -mt-[25%]">
            <div className="relative">
              <AspectRatio ratio={2048 / 1664}>
                <Image
                  src={"/single-dog/images/gift-box.png"}
                  alt="heart"
                  fill
                  priority
                />
              </AspectRatio>
              <div className="absolute right-0 w-12 top-4">
                <AspectRatio ratio={2048 / 6630}>
                  <Image
                    src={"/single-dog/svg/ballown.svg"}
                    alt="ballown"
                    fill
                  />
                </AspectRatio>
              </div>
              <div className="absolute bottom-[12%] left-0 right-0 font-black text-white text-4xl text-center">
                {score}
              </div>
            </div>
          </div>
          <div className="-mx-3 py-3">
            <div className="w-full relative">
              <AspectRatio ratio={1149 / 108}>
                <Image
                  src={"/single-dog/svg/flower-arrow.svg"}
                  alt="Flower"
                  fill
                />
              </AspectRatio>
              <div className="absolute left-[30%] right-[30%] top-0 bottom-0 flex items-center">
                <StartButton />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="px-6">
            <div className="relative">
              <AspectRatio ratio={2048 / 999}>
                <Image
                  src={"/single-dog/images/rank-box.png"}
                  alt="heart"
                  fill
                />
              </AspectRatio>
              <div className="absolute flex-col top-0 pt-[8%] left-0 right-0 bottom-0 flex justify-center items-center">
                <p className="font-black text-5xl">#{rank}</p>
                <p className="text-center text-md font-black pb-3">
                  通過邀請提升排名
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                <ShareButton />
              </div>
              <div className="absolute -left-2 w-[15%] top-0">
                <AspectRatio ratio={2048 / 6630}>
                  <Image
                    src={"/single-dog/svg/ballown.svg"}
                    alt="ballown"
                    fill
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="px-4 py-12">
            <RewardBox />
          </div>
          {/*  */}
          <div className="px-4 relative pt-0 pb-12">
            <RuleBox className=" rounded-2xl border border-black p-2">
              <div className="rounded-2xl p-2 border border-black bg-white">
                <div
                  className="rounded-2xl border p-3 border-black"
                  style={{
                    background: "#F3DBB9",
                  }}
                >
                  <div className="absolute -top-[5vw] left-0 right-0">
                    <div className="w-2/5 mx-auto">
                      <AspectRatio ratio={2048 / 679}>
                        <Image
                          src={"/single-dog/images/rule-title.png"}
                          alt="Rule"
                          fill
                        />
                      </AspectRatio>
                    </div>
                  </div>
                  <p className="text-left text-sm font-bold pt-4">
                    1.
                    閣下可按照自己的意願，在本公司的遊戲（「本網站」）提供閣下的電郵地址及其他個人資料（「個人資料」）。
                    <br />
                    <br />
                    2.
                    我們將只會為履行收集閣下的個人資料之目的所需，而保存閣下的個人資料。
                    <br />
                    <br />
                    3.
                    本公司會依從客戶的要求，不會將其個人資料作為直銷推廣之用。
                    <br />
                    若閣下同意，本公司擬使用閣下的個人資料【包括：名字、電話號碼、地址及電郵等有關資料】作以下用途
                    (無論通過郵件、電郵、電話、傳真、短訊或類似形式)：
                    <br />* 宣傳及推廣產品及服務{";"}
                    <br />* 派發產品試用裝及樣本{";"}
                    <br />* 安排推廣計劃或活動及提供有關資料{";"}及
                    <br />* 提供推廣資料。
                    <br />
                    請注意，除非取得閣下的同意，否則本公司不能如上述般使用閣下的個人資料。
                    <br />
                    <br />
                    4.
                    閣下可以不時致函電郵地址info@travel3.app，以要求核實及更正閣下在本公司紀錄中的個人資料。本公司在成功核實閣下的身分後，將於合理的時間之內回應閣下的要求。
                    <br />
                    <br />
                    5.
                    閣下可隨時發送電郵至info@travel3.app，要求本公司從本公司通訊名單中移除閣下的資料。
                    <br />
                    <br />
                    6.
                    若閣下不同意上述任何條款及條件，閣下不應向本公司提供個人資料。
                  </p>
                </div>
              </div>
            </RuleBox>
          </div>
          <div>
            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0">
              <AspectRatio ratio={2048 / 606}>
                <Image
                  src={"/single-dog/images/footer.png"}
                  alt="Footer"
                  fill
                />
              </AspectRatio>
            </div>
          </div>
        </AzureBackground>
      </App>
    </>
  );
}

export default withProvider(Page, Provider);