import Image from 'next/image';
import { Inter } from 'next/font/google';
import Bid from '@/components/bid';
import InfiniteScrollLoop from '@/components/infiniteScroll';

const inter = Inter({ subsets: ['latin'] });

const data1 = {
  type: 'erc',
  asset: 'USDC',
  asset_imageURL: 'usdc.png',
  asset_amount: 50000,
  asset_value: 49999.98,
  collateral: 'WETH',
  collateral_amount: 28,
  collateral_value: 51384,
  collateral_imageURL: 'weth.png',
  interest: 317.5,
  duration: 60,
};

const data2 = {
  type: 'erc',
  asset: 'USDC',
  asset_imageURL: 'usdc.png',
  asset_amount: 33000,
  asset_value: 4999.98,
  collateral: 'WETH',
  collateral_amount: 18,
  collateral_value: 51384,
  collateral_imageURL: 'weth.png',
  interest: 17.5,
  duration: 60,
};

const textdr = {
  type: 'text',
  info: 'Dynamic Term',
  bgColor: '#5EEAD412',
  textColor: '#5EEAD4',
  borderColor: '#5EEAD480',
};

const textim = {
  type: 'text',
  info: 'Immutable',
  bgColor: '#C084FC1A',
  textColor: '#C084FC',
  borderColor: '#C084FC80',
};

const textfr = {
  type: 'text',
  info: 'Fixed Rate',
  bgColor: '#3B82F61A',
  textColor: '#3B82F6',
  borderColor: '#3B82F680',
};

const nft = {
  type: 'nft',
  asset: 'USDC',
  asset_imageURL: 'usdc.png',
  asset_amount: 50000,
  asset_value: 49999.98,
  collateral: 'BAYC',
  collateral_amount: 28,
  collateral_value: 51384,
  collateral_token_id: 1234,
  collateral_imageURL: 'bayc.png',
  interest: 317.5,
  duration: 60,
};

//make an array of 10 bids
const bids = Array.from({ length: 4 }, (_, i) => nft);
const bidscol1 = [data1, data2, textdr, nft];
const bidscol2 = [data1, data2, textim, nft];
const bidscol3 = [nft, data2, textfr, nft];
const bidsmobile = [
  data2,
  textdr,
  nft,
  data1,
  data2,
  textim,
  nft,
  data1,
  textfr,
];

export default function Home() {
  return (
    <div className="p-8 relative overflow-hidden h-screen flex flex-col gap-8">
      <div className="mx-auto my-4">
        <svg
          className=""
          width="193"
          viewBox="0 0 772 213"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M284.715 170.893H306.05L340.765 79.5855H325.396L296.106 158.96H294.478L265.369 79.5855H250L284.715 170.893Z"
            fill="white"
          />
          <path
            d="M382.417 173.786C397.062 173.786 407.73 168 414.239 157.513H415.866V170.893H430.873V110.323C430.873 89.5298 415.866 76.1502 392.18 76.1502C369.218 76.1502 354.211 88.445 354.211 107.791H369.399C369.218 96.4005 378.258 89.7106 391.999 89.7106C407.006 89.7106 415.866 97.6661 415.866 109.961V113.577L390.553 116.651C363.432 119.725 349.691 131.658 349.691 147.75C349.691 163.48 362.709 173.786 382.417 173.786ZM384.586 161.31C372.292 161.31 364.698 156.067 364.698 147.388C364.698 138.89 371.93 131.658 390.553 129.307L415.866 126.414V134.551C415.866 149.919 403.209 161.31 384.586 161.31Z"
            fill="white"
          />
          <path d="M456.861 170.893H471.868V38H456.861V170.893Z" fill="white" />
          <path
            d="M544.069 174.509C564.319 174.509 580.773 165.107 588.186 149.558L575.71 143.229C569.924 154.078 557.991 160.948 544.431 160.948C525.808 160.948 512.428 148.654 510.258 130.211H591.079C591.26 128.222 591.26 126.053 591.26 124.245C591.26 96.2197 571.19 75.9694 543.346 75.9694C515.14 75.9694 494.89 96.2197 494.89 124.064C494.89 153.355 515.502 174.509 544.069 174.509ZM510.439 117.012C512.97 100.559 525.808 89.5298 542.623 89.5298C559.98 89.5298 572.817 100.559 575.529 117.012H510.439Z"
            fill="white"
          />
          <path
            d="M614.36 170.893H629.367V117.555C629.367 101.644 642.566 89.7106 657.935 89.7106C673.665 89.7106 682.886 100.921 682.886 116.289V170.893H697.893V116.289C697.893 93.146 683.067 76.1502 659.924 76.1502C647.81 76.1502 637.684 81.936 631.175 92.0611H629.367V79.5855H614.36V170.893Z"
            fill="white"
          />
          <path
            d="M756.921 174.328C761.441 174.328 767.407 173.424 771.747 171.978V159.864C768.311 160.948 763.61 161.672 760.898 161.672C752.22 161.672 746.795 155.524 746.795 146.845V91.5187H770.3V79.5855H746.795L746.976 50.114H735.224L731.789 79.5855H716.962V91.5187H731.789V147.388C731.789 163.48 741.552 174.328 756.921 174.328Z"
            fill="white"
          />
          <path
            d="M84.4142 5.62524C85.7729 -1.87508 96.227 -1.87508 97.5858 5.62524C105.25 47.9312 137.45 81.0288 178.608 88.9065C179.263 89.0319 179.86 89.2327 180.397 89.4953C184.112 91.31 180.747 95.6759 176.634 95.6759H136.348C125.374 95.6759 114.866 91.2386 107.214 83.373L95.5063 71.339C93.4278 69.2026 90.058 69.2026 87.9795 71.339L76.272 83.373C68.6196 91.2386 58.112 95.6759 47.138 95.6759H5.36561C1.25304 95.6759 -2.11163 91.31 1.60273 89.4953C2.14025 89.2327 2.73661 89.0319 3.3918 88.9065C44.5502 81.0288 76.7502 47.9312 84.4142 5.62524Z"
            fill="white"
          />
          <path
            d="M76.2973 128.96C68.645 121.095 58.1373 116.657 47.1634 116.657H5.3656C1.25303 116.657 -2.11163 121.023 1.60272 122.838C2.14025 123.101 2.7366 123.301 3.39179 123.427C44.5502 131.305 76.7502 164.402 84.4142 206.708C85.7729 214.208 96.227 214.208 97.5858 206.708C105.25 164.402 137.45 131.305 178.608 123.427C179.263 123.301 179.86 123.101 180.397 122.838C184.112 121.023 180.747 116.657 176.634 116.657H136.322C125.349 116.657 114.841 121.095 107.189 128.96L95.5063 140.968C93.4278 143.105 90.058 143.105 87.9795 140.968L76.2973 128.96Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="hidden md:flex justify-center items-center mx-auto space-x-8">
        <InfiniteScrollLoop direction={'up'} id={1}>
          {bidscol1.map((bid) => (
            <Bid type={bid.type} data={bid} />
          ))}
        </InfiniteScrollLoop>
        <InfiniteScrollLoop direction={'down'} id={2}>
          {bidscol2.map((bid) => (
            <Bid type={bid.type} data={bid} />
          ))}
        </InfiniteScrollLoop>
        <InfiniteScrollLoop direction={'up'} id={3}>
          {bidscol3.map((bid) => (
            <Bid type={bid.type} data={bid} />
          ))}
        </InfiniteScrollLoop>
      </div>
      <div className=" md:hidden flex justify-center items-center md:mx-auto md:space-x-8">
        <InfiniteScrollLoop direction={'down'} id={2}>
          {bidsmobile.map((bid) => (
            <Bid type={bid.type} data={bid} />
          ))}
        </InfiniteScrollLoop>
      </div>
      <div className="absolute p-8 bottom-24 left-1/2 -translate-x-[50%] flex flex-col md:flex-row gap-8 flex-grow justify-center items-center">
        <div className="w-64 z-10 bg-white text-black py-6 px-8 text-center rounded-xl font-bold text-2xl">
          Borrow
        </div>
        <div className="w-64 z-10 bg-white text-black py-6 px-8 text-center rounded-xl font-bold text-2xl">
          Lend
        </div>
        <div className="absolute p-12 inset-0 blur-xl bg-black"></div>
      </div>
    </div>
  );
}
