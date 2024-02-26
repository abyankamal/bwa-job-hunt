import LatestJobs from "@/components/organisms/LatestJobs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { AiOutlineFire } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import {
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";

interface DetailCompanyPageProps {}

const DetailCompanyPage: FC<DetailCompanyPageProps> = ({}) => {
  return (
    <>
      <div className="bg-slate-100 px-32 pt-16 pb-14">
        <div className="inline-flex gap-3 text-sm text-muted-foreground">
          <Link className="hover:underline hover:text-black" href="/">
            Home
          </Link>{" "}
          /{" "}
          <Link
            className="hover:underline hover:text-black"
            href="/find-companies"
          >
            Companies
          </Link>{" "}
          /{" "}
          <Link
            className="hover:underline hover:text-black"
            href={`/detail/company/1`}
          >
            Twitter
          </Link>
        </div>
        <div>
          <div className="mt-10 inline-flex gap-6 items-start">
            <Image
              src="/images/company2.png"
              alt="/images/company2.png"
              width={150}
              height={100}
            />
            <div>
              <div className="inline-flex gap-4 items-center">
                <span className="text-4xl font-semibold">Twitter</span>
                <Badge>10 Jobs</Badge>
              </div>
              <div className="mt-2">
                <Link href="/" className="font-semibold text-primary">
                  https://www.youtube.com/
                </Link>
              </div>
              <div className="inline-flex items-center gap-10 mt-6">
                <div>
                  <div className="bg-white p-3 rounded-full">
                    <AiOutlineFire className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="text-grey-500">Founded</div>
                  <div className="font-semibold">March, 06 2023</div>
                </div>
                <div>
                  <div className="bg-white p-3 rounded-full">
                    <BsPeople className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="text-grey-500">Employees</div>
                  <div className="font-semibold">151-200</div>
                </div>
                <div>
                  <div className="bg-white p-3 rounded-full">
                    <HiOutlineLocationMarker className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="text-grey-500">Location</div>
                  <div className="font-semibold">Indonesia</div>
                </div>
                <div>
                  <div className="bg-white p-3 rounded-full">
                    <HiOutlineOfficeBuilding className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="text-grey-500">Industry</div>
                  <div className="font-semibold">Advertising</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-32 py-16 flex flex-row items-start gap-10">
        <div className="w-3/4">
          <div className="mb-16">
            <div className="text-3xl font-semibold mb-3">Description</div>
            <div className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              rhoncus tortor est, sit amet sagittis magna accumsan id. Vivamus
              consectetur purus sagittis nulla scelerisque, vel finibus orci
              fringilla. Suspendisse fringilla aliquam ligula non congue. Proin
              eget nibh id lectus dapibus egestas. Donec sed leo mollis, posuere
              lorem nec, rhoncus lacus
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold mb-4">Contact</div>
            <div className="flex items-center gap-5 w-[400px] flex-wrap">
              <div className="p-2 border border-primary text-primary w-max inline-flex items-center gap-3 font-semibold">
                <FacebookIcon />
                <span className="text-sm">https://www.youtube.com/</span>
              </div>
              <div className="p-2 border border-primary text-primary w-max inline-flex items-center gap-3 font-semibold">
                <TwitterIcon />
                <span className="text-sm">https://www.youtube.com/</span>
              </div>
              <div className="p-2 border border-primary text-primary w-max inline-flex items-center gap-3 font-semibold">
                <LinkedinIcon />
                <span className="text-sm">https://www.youtube.com/</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="text-3xl font-semibold mb-4">Tech Stack</div>
          <div className="text-gray-500 text-sm">
            Learn about the technology and tools that Pattern uses.
          </div>
          <div className="mt-5 flex flex-row items-center flex-wrap gap-4">
            <Badge>Javascript</Badge>
            <Badge>Html</Badge>
          </div>
        </div>
      </div>
      <div className="px-32">
        <Separator />
        <div className="my-16">
          <div className="text-3xl font-semibold mb-4">Teams</div>
          <div className="grid grid-cols-5 gap-5 mt-5">
            <div className="border border-border px-3 py-5">
              <div className="w-16 h-16 rounded-full mx-auto bg-gray-300" />

              <div className="text-center my-4">
                <div className="font-semibold text-sm">
                  Muhammad Abyan Kamal
                </div>
                <div className="text-gray-500 text-xs">CEO</div>
              </div>

              <div className="mx-auto w-max">
                <div className="inline-flex gap-2">
                  <InstagramIcon className="w-4 h-4 text-gray-500" />
                  <LinkedinIcon className="w-4 h-4 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator />
      </div>
      <div className="px-32">
        <LatestJobs />
      </div>
    </>
  );
};

export default DetailCompanyPage;