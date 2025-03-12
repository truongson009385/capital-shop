//Next
import Image from "next/image";

//Components UI
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

//Components
import CategoryCard from "@/components/common/CategoryCard";
import ProductItem from "@/components/product/ProductItem";

//Assets
import Banner from "@/assets/img/banner.jpg";
import FeedbackCard from "@/components/common/FeedbackCard";
import ArticleItem from "@/components/article/ArticleItem";
import PolicyCard from "@/components/common/PolicyCard";
import { Coins, CreditCard, Headset, Truck } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Thời trang nam",
    slug: "thoi-trang-nam",
    image: "/item-cate.jpg",
  },
  {
    id: 2,
    name: "Thời trang nữ",
    slug: "thoi-trang-nu",
    image: "/item-cate.jpg",
  },
  {
    id: 3,
    name: "Phụ kiện",
    slug: "phu-kien",
    image: "/item-cate.jpg",
  },
];

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        {/* Banner */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem>
              <Image src={Banner} alt="banner" />
            </CarouselItem>
            <CarouselItem>
              <Image src={Banner} alt="banner" />
            </CarouselItem>
            <CarouselItem>
              <Image src={Banner} alt="banner" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>

        {/* Products */}
        <Tabs defaultValue="men" className="">
          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <h2 className="text-3xl font-bold">Sản phẩm mới</h2>

            <TabsList>
              <TabsTrigger value="men">Men</TabsTrigger>
              <TabsTrigger value="women">Women</TabsTrigger>
              <TabsTrigger value="baby">Baby</TabsTrigger>
              <TabsTrigger value="fashion">Fashion</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="men">
            <Carousel>
              <CarouselContent>
                <CarouselItem className="basis-1/4 mb-10">
                  <ProductItem />
                </CarouselItem>
                <CarouselItem className="basis-1/4 mb-10">
                  <ProductItem />
                </CarouselItem>
                <CarouselItem className="basis-1/4 mb-10">
                  <ProductItem />
                </CarouselItem>
                <CarouselItem className="basis-1/4 mb-10">
                  <ProductItem />
                </CarouselItem>
                <CarouselItem className="basis-1/4 mb-10">
                  <ProductItem />
                </CarouselItem>
                <CarouselItem className="basis-1/4 mb-10">
                  <ProductItem />
                </CarouselItem>
                <CarouselItem className="basis-1/4 mb-10">
                  <ProductItem />
                </CarouselItem>
                <CarouselItem className="basis-1/4 mb-10">
                  <ProductItem />
                </CarouselItem>
                <CarouselItem className="basis-1/4 mb-10">
                  <ProductItem />
                </CarouselItem>
                <CarouselItem className="basis-1/4 mb-10">
                  <ProductItem />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </TabsContent>
          <TabsContent value="women">Change your password here.</TabsContent>
          <TabsContent value="baby">Change your password here.</TabsContent>
          <TabsContent value="fashion">Change your password here.</TabsContent>
        </Tabs>
      </div>
      {/* Feedback */}
      <div className="bg-orange-100 py-30 mt-10 mb-30">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem>
              <FeedbackCard />
            </CarouselItem>
            <CarouselItem>
              <FeedbackCard />
            </CarouselItem>
            <CarouselItem>
              <FeedbackCard />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-1/4" />
          <CarouselNext className="right-1/4" />
        </Carousel>
      </div>
      <div className="container mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">You May Like</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/4 mb-10">
              <ProductItem />
            </CarouselItem>
            <CarouselItem className="basis-1/4 mb-10">
              <ProductItem />
            </CarouselItem>
            <CarouselItem className="basis-1/4 mb-10">
              <ProductItem />
            </CarouselItem>
            <CarouselItem className="basis-1/4 mb-10">
              <ProductItem />
            </CarouselItem>
            <CarouselItem className="basis-1/4 mb-10">
              <ProductItem />
            </CarouselItem>
            <CarouselItem className="basis-1/4 mb-10">
              <ProductItem />
            </CarouselItem>
            <CarouselItem className="basis-1/4 mb-10">
              <ProductItem />
            </CarouselItem>
            <CarouselItem className="basis-1/4 mb-10">
              <ProductItem />
            </CarouselItem>
            <CarouselItem className="basis-1/4 mb-10">
              <ProductItem />
            </CarouselItem>
            <CarouselItem className="basis-1/4 mb-10">
              <ProductItem />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">You May Like</h2>
          <div className="grid grid-cols-3 gap-4">
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
          </div>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-4">
            <PolicyCard className="border-r border-gray-200">
              <Truck size={60} />
            </PolicyCard>
            <PolicyCard className="border-r border-gray-200">
              <CreditCard size={60}/>
            </PolicyCard>
            <PolicyCard className="border-r border-gray-200">
              <Coins size={60}/>
            </PolicyCard>
            <PolicyCard>
              <Headset size={60}/>
            </PolicyCard>
        </div>
      </div>
    </>
  );
}
