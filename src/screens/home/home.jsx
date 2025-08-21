import Header from "../../components/header/header";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Header />
      <div className="h-full w-full absolute top-[0] ">
        <video
          className="h-full w-full object-cover rounded-4xl"
          src="/assets/images/landingVedio.mp4 "
          type="video/mp4"
          autoPlay
          loop
          muted
          controls={false}
        />
        <div className="w-full flex justify-center absolute top-[40%]">
          <div>
            <div className="pl-[30px]">
              <div className="text-[70px]">Transform Life </div>
              <div className="text-[70px]">Restore Hope</div>
            </div>
            <div className="text-[18px] text-white p-[20px]">
              Our Coummunity Extends Beyond Physical Boundries
            </div>
            <div className=" text-[20px] pl-[70px]">
              <button className="px-[10px] bg-white rounded-sm ">
                JOIN NOW
              </button>
              <button className="px-[10px]  ml-[30px] border border-white border-solid text-white rounded-sm">
                MAKE A DONATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
