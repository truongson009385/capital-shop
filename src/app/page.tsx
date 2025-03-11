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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

//Components
import CategoryCard from "@/components/common/CategoryCard";
import ProductItem from "@/components/product/ProductItem";

//Assets
import Banner from "@/assets/img/banner.jpg";

const categories = [
  {
    id: 1,
    name: "Thời trang nam", 
    slug: "thoi-trang-nam",
    image: "/item-cate.jpg"
  },
  {
    id: 2,
    name: "Thời trang nữ",
    slug: "thoi-trang-nu", 
    image: "/item-cate.jpg"
  },
  {
    id: 3,
    name: "Phụ kiện",
    slug: "phu-kien",
    image: "/item-cate.jpg"
  },
];

export default function Home() {

  return (
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>

      {/* Products */}
      <Tabs defaultValue="account" className="">
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold">Sản phẩm mới</h2>

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
              <CarouselItem className="basis-1/4">
                <ProductItem />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <ProductItem />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <ProductItem />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <ProductItem />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <ProductItem />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <ProductItem />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <ProductItem />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <ProductItem />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <ProductItem />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
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
  );
}
