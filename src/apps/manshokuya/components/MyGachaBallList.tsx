import { AspectRatio } from "@/components/ui";
import Image from "next/image";
import styled from "styled-components";
import { Coupons } from "../constant";
import { useMemo } from "react";
import clsx from "clsx";
import { useManshokuya } from "../Provider";

const MyGachaBallListContainer = styled.div`
  border-radius: 40px;
  border: 4px solid #000;
  background: #fff;
  position: relative;
  box-shadow: 8px 8px 0px #000;
`;

const CardButton = styled.div`
  border-radius: 40px;
  background-color: #eedfb6;
  border: 1px solid #603813;
  color: #603813;
  box-shadow: 0px 4px 0px #603813;
`;

export type MyGachaBallCardProps = {
  status: "Pending" | "Used";
  discount: string;
  code: string;
  couponId: number;
};

export function MyGachaBallCard({ status, couponId }: MyGachaBallCardProps) {
  const { view } = useManshokuya();
  const coupon = useMemo(
    () => Coupons.find((coupon) => coupon.id === couponId),
    [couponId],
  );

  const handleView = () => {
    view(coupon);
  };

  return (
    <div
      className={clsx(
        status === "Used" && "cursor-not-allowed",
        "relative mb-3",
      )}
    >
      <AspectRatio ratio={2048 / 473}>
        <Image
          src="/images/manshokuya/Ball-Card.svg"
          fill
          alt="Gocha Ball Card"
        />
      </AspectRatio>
      <div className="absolute left-0 top-0 bottom-0 right-0 flex items-center pl-1 pr-3 pb-1">
        <div className="w-16">
          <AspectRatio ratio={2048 / 1835}>
            <Image
              src={coupon?.avatar ?? ""}
              objectFit="contain"
              fill
              alt="Gocha Ball Card"
            />
          </AspectRatio>
        </div>
        {/* <div className="h-12 mx-1 border-r border-black "></div> */}
        <div className="flex-1 ml-1">
          <div className="text-lg">{coupon?.name}</div>
          <div className="text-xs">{coupon?.description}</div>
        </div>
        <CardButton
          className="px-3 py-1.5 font-bold text-xs"
          onClick={handleView}
        >
          查看內容
        </CardButton>
      </div>
    </div>
  );
}

export type MyGachaBallListProps = {
  data: {
    code: string;
    discount: string;
    status: string;
    couponId: number;
  }[];
};

export default function MyGachaBallList({ data }: MyGachaBallListProps) {
  return (
    <MyGachaBallListContainer id="balls">
      <div className="flex flex-col px-4 pb-6">
        <div className="flex flex-col items-center">
          <div
            style={{
              width: "49.3%",
              transform: "translateY(-50%)",
            }}
          >
            <AspectRatio ratio={2048 / 575}>
              <Image
                src="/images/manshokuya/My-Balls.png"
                fill
                alt={"Game Rule"}
              />
            </AspectRatio>
          </div>
        </div>
        <div>
          {(!data || data.length === 0) && (
            <p className="text-center text-lg">請進行遊戲獲得。</p>
          )}
          {data?.map((item) => (
            <MyGachaBallCard
              key={item.code}
              code={item.code}
              discount={item.discount}
              couponId={item.couponId}
              status={item.status as "Pending" | "Used"}
            />
          ))}
        </div>
      </div>
    </MyGachaBallListContainer>
  );
}
