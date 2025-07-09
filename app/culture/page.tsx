import { Jobs, Locations, Section, Values } from "@/components/sections";
import SpecialVideo from "@/components/sections/common/SpecialVideo";
import Image from "next/image";
import { HIGHLIGHT } from "../assets";

const tabData = [
  {
    id: "0",
    title: "Lorem Ipsum",
    heading: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    video:
      "https://s3.ap-south-1.amazonaws.com/bucket.bramer.web/web-assets/videos/autonomy.mp4",
    mask: "tablet:bg-gradient-to-t from-black to-transparent absolute inset-0",
  },
  {
    id: "1",
    title: "Dolor Sit",
    heading: "Dolor Sit",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    video:
      "https://s3.ap-south-1.amazonaws.com/bucket.bramer.web/web-assets/videos/software.mp4",
    mask: "tablet:bg-gradient-to-t from-black to-transparent absolute inset-0",
  },
  {
    id: "2",
    title: "Consectetur",
    heading: "Consectetur",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure reprehenderit.",
    video:
      "https://s3.ap-south-1.amazonaws.com/bucket.bramer.web/web-assets/videos/avionics.mp4",
    mask: "tablet:bg-gradient-to-t from-black to-transparent absolute inset-0",
  },
  {
    id: "3",
    title: "Adipiscing",
    heading: "Adipiscing",
    description:
      "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    video:
      "https://s3.ap-south-1.amazonaws.com/bucket.bramer.web/web-assets/videos/payload.mp4",
    mask: "tablet:bg-gradient-to-t from-black to-transparent absolute inset-0",
  },
  {
    id: "4",
    title: "Tempor",
    heading: "Tempor",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique sunt in culpa qui officia deserunt mollitia animi id est laborum et dolorum fuga et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis est.",
    video:
      "https://s3.ap-south-1.amazonaws.com/bucket.bramer.web/web-assets/videos/hardware.mp4",
    mask: "tablet:bg-gradient-to-t from-black to-transparent absolute inset-0",
  },
];

const page = () => {
  return (
    <>
      {/* Mission Section */}
      <div data-id="mission">
        <Section
          id="mission"
          subtitle="Lorem Ipsum"
          title="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          description1="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          description2="Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        />
        <section className="relative h-screen z-10">
          <Image
              src={HIGHLIGHT}
              alt="highlight"
              fill
              priority
              className="object-cover"
          />
        </section>
      </div>

      {/* Team Section */}
      <div data-id="team">
        <Section
          id="team"
          subtitle="Lorem Team"
          title="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          description1="Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          description2="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
          top={false}
          sectionStyles="py-20 space-y-10"
        />
      </div>
      
      <SpecialVideo
        tabData={tabData}
        className="h-[700vh]"
        progressMultiplierHorizontal={15}
        progressMultiplierVertical={{ small: 6.5, default: 9 }}
      />

      {/* Values Section */}
      <div data-id="values">
        <Values />
      </div>

      {/* Jobs Section */}
      <div data-id="jobs">
        <Jobs />
      </div>

      {/* Locations Section */}
      <div data-id="location">
        <Locations />
      </div>
    </>
  );
};

export default page;