import React from 'react';
import Image from 'next/image';

function Container({ children }) {
  return (
    <div className="container my-8 mx-auto w-[382px] h-[143px] rounded-[10px] bg-white/5 border-2 border-white/10">
      {children}
    </div>
  );
}

function TextContainer({ children, bgColor, textColor, borderColor }) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: borderColor,
      }}
      className="container flex text-4xl font-bold justify-center items-center my-8 mx-auto w-[382px] h-[143px] rounded-[10px] border-2"
    >
      {children}
    </div>
  );
}

export default function Bid({ type, data }) {
  switch (type) {
    case 'erc':
      return (
        <Container>
          <div className="flex flex-col">
            <div className="flex border-b-2 p-2 px-4 border-white/10 gap-8 justify-between w-full">
              <div className="flex flex-col gap-2 ">
                <div className="capitalize font-medium text-white/40 tracking-wide">
                  ASSET
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <Image
                    width={32}
                    height={32}
                    src={`/${data.asset_imageURL}`}
                  />
                  <div className="text-2xl font-bold tracking-tight">
                    {data.asset_amount}
                  </div>
                  <div className="text-xs font-medium text-white/40 tracking-tight">
                    {'($' + data.asset_value + ')'}
                  </div>
                </div>
              </div>
              <div className="flex flex-grow flex-col gap-2">
                <div className="capitalize w-full font-medium text-white/40 tracking-wide">
                  COLLATERAL
                </div>
                <div className="flex gap-2 w-full justify-start items-center">
                  <Image
                    width={32}
                    height={32}
                    src={`/${data.collateral_imageURL}`}
                  />
                  <div className="text-2xl font-bold tracking-tight">
                    {data.collateral_amount}
                  </div>
                  <div className="text-xs font-medium text-white/40 tracking-tight">
                    {'($' + data.collateral_value + ')'}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 font-bold text-xl">
              {data.interest + '% for ' + data.duration + 'd'}
            </div>
          </div>
        </Container>
      );
    case 'nft':
      return (
        <Container>
          <div className="flex flex-row">
            <div className="flex flex-col h-full border-r-2 border-white/10">
              <div className="flex border-b-2 p-4 py-2 border-white/10 flex-col gap-2 ">
                <div className="capitalize font-medium text-white/40 tracking-wide">
                  ASSET
                </div>
                <div className="flex gap-2 justify-start items-center">
                  <Image
                    width={32}
                    height={32}
                    src={`/${data.asset_imageURL}`}
                  />
                  <div className="text-2xl font-bold tracking-tight">
                    {data.asset_amount}
                  </div>
                </div>
              </div>
              <div className="p-4 font-bold text-xl">
                {data.interest + '% for ' + data.duration + 'd'}
              </div>
            </div>
            <div className="flex flex-col p-2 px-4 flex-grow">
              <div className="capitalize font-medium text-white/40 tracking-wide">
                COLLATERAL
              </div>
              <div className="flex flex-grow gap-4 pt-4">
                <div>
                  <Image
                    width={72}
                    height={72}
                    src={`/${data.collateral_imageURL}`}
                  />
                </div>

                <div className="text-2xl flex flex-col font-medium tracking-tight">
                  {data.collateral}
                  <div>{'#' + data.collateral_token_id}</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      );
    case 'text':
      return (
        <TextContainer
          bgColor={data.bgColor}
          textColor={data.textColor}
          borderColor={data.borderColor}
        >
          {data.info}
        </TextContainer>
      );
    default:
      <div>null</div>;
  }
}
