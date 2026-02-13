export interface Project {
  id: string; // Required for the internal project page link
  title: string;
  desc: string;
  contentUrl: string;
  isVid?: boolean;
  visitLink?: string;
  bgImage?: string;
  bgColor?: string;
  contentSize?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "insposite",
    title: "Insposite",
    desc: "A curated resource hub for developers to find inspiration and build better.",
    contentUrl: "/insposite_video.webm",
    isVid: true,
    bgImage: "/wallhaven.jpg",
    contentSize: "w-[90%] h-[90%]",
    featured: true,
  },
    {
    id: "food-subscription",
    title: "Food Subscription app",
    desc: "A curated resource hub for developers to find inspiration and build better.",
    contentUrl: "/food_app.png",
    visitLink: "#",
    featured: true
  },
{
    id: "keyboard-project",
    title: "Custom Keyboard",
    desc: "A retro-themed keyboard design for developer portfolios.",
    contentUrl: "/keyboard.png",
  },
    {
    id: "profile-card",
    title: "Profile Card",
    desc: "A custom-designed profile component featuring dither effects.",
    contentUrl: "/profilecard.mp4",
    isVid: true,
  },



  {
    id: "isometric-ui",
    title: "Isometric UI Design",
    desc: "3D isometric interface design explorations.",
    contentUrl: "/isometric2_for_x.mp4",
    isVid: true,
  },

];