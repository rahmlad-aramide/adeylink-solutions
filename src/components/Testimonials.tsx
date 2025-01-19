import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
//@ts-expect-error cannot find module
import "swiper/css";
//@ts-expect-error cannot find module
import "swiper/css/navigation";
//@ts-expect-error cannot find module
import "swiper/css/pagination";

export function Testimonials() {
  const testimonials = [
    {
      name: "Oluwaseun Adebayo",
      role: "Business Owner",
      content:
        "Adeylink Solutions has been a game-changer for my business. Their data plans are affordable and the delivery is instant!",
    },
    {
      name: "Chinedu Okonkwo",
      role: "Student",
      content:
        "The best data reseller I've used. Their customer service is exceptional and prices are unbeatable.",
    },
    {
      name: "Aisha Ibrahim",
      role: "Reseller Agent",
      content:
        "Being an agent with Adeylink Solutions has been rewarding. The support team is always there when I need them.",
    },
    {
      name: "Folake Adeleke",
      role: "Shop Owner",
      content:
        "I've been using Adeylink Solutions for my shop's data needs. Very reliable and the prices are great!",
    },
    {
      name: "Emeka Okafor",
      role: "Business Developer",
      content:
        "The wholesale prices and instant delivery make Adeylink Solutions the best choice for bulk purchases.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our customers have to say
          about our services.
        </p>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <div className="flex items-center px-5 sm:px-8 md:px-10">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 w-6 h-6 aspect-square">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 w-6 h-6 aspect-square">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
