import React from "react";
import { useRouter } from "next/router";
import Projects from "../../components/Projects";
import Head from "next/head";
import { SiNextdotjs } from 'react-icons/si';
import { SiOpenai } from 'react-icons/si';
import { SiTailwindcss, SiVercel } from "react-icons/si";

const CloudflareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="35"
    height="35"
  >
    <path
      fill="#FFF"
      d="m115.679 69.288-15.591-8.94-2.689-1.163-63.781.436v32.381h82.061z"
    />
    <path
      fill="#F38020"
      d="M87.295 89.022c.763-2.617.472-5.015-.8-6.796-1.163-1.635-3.125-2.58-5.488-2.689l-44.737-.581c-.291 0-.545-.145-.691-.363s-.182-.509-.109-.8c.145-.436.581-.763 1.054-.8l45.137-.581c5.342-.254 11.157-4.579 13.192-9.885l2.58-6.723c.109-.291.145-.581.073-.872-2.906-13.158-14.644-22.97-28.672-22.97-12.938 0-23.913 8.359-27.838 19.952a13.35 13.35 0 0 0-9.267-2.58c-6.215.618-11.193 5.597-11.811 11.811-.145 1.599-.036 3.162.327 4.615C10.104 70.051 2 78.337 2 88.549c0 .909.073 1.817.182 2.726a.895.895 0 0 0 .872.763h82.57c.472 0 .909-.327 1.054-.8l.617-2.216z"
    />
    <path
      fill="#FAAE40"
      d="M101.542 60.275c-.4 0-.836 0-1.236.036-.291 0-.545.218-.654.509l-1.744 6.069c-.763 2.617-.472 5.015.8 6.796 1.163 1.635 3.125 2.58 5.488 2.689l9.522.581c.291 0 .545.145.691.363.145.218.182.545.109.8-.145.436-.581.763-1.054.8l-9.924.582c-5.379.254-11.157 4.579-13.192 9.885l-.727 1.853c-.145.363.109.727.509.727h34.089c.4 0 .763-.254.872-.654.581-2.108.909-4.325.909-6.614 0-13.447-10.975-24.422-24.458-24.422"
    />
  </svg>
);

const MUIIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="35"
    height="35"
  >
    <path
      fill="#1FA6CA"
      d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6z"
    />
    <path
      fill="#1C7FB6"
      d="M48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z"
    />
    <path fill="#1FA6CA" d="M48 77.8v18.4l32 18.4V96.2L48 77.8z" />
    <path
      fill="#1C7FB6"
      d="M80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z"
    />
  </svg>
);

const projectsMap = {
    jobGeniusAi: {
        logo: "jobGeniusAi",
        name: "JobGeniusAI",
        githubLink: "https://github.com/syedmuzammil779/GeniusJobAI-Nextjs",
        websiteLink: "https://job-genius-ai-beta.vercel.app/",
        image: {
            src: "/JobGeniusAi.png",
            alt: "JobGeniusAI web app image",
            width: 1150,
            height: 821,
        },
        description: (
            <>
            JobGeniusAI is a <strong>career development platform</strong> built with
            the <strong>MERN stack</strong> and <strong>Next.js</strong>, designed to
            help users prepare for jobs using <strong>AI-driven tools</strong>. It
            provides <strong>personalized career guidance</strong>,{" "}
            <strong>smart interview preparation</strong>,{" "}
            <strong>real-time industry insights</strong>, and{" "}
            <strong>automated resume creation</strong>. The platform leverages AI
            models to tailor learning paths and interview questions while offering a
            smooth, <strong>SEO-optimized experience</strong> for users seeking to
            advance their careers.
            </>
        ),
        technologies: [
          {
            name: "Tailwind CSS",
            icon: <SiTailwindcss size={35} />,
          },
          { name: "React.js", icon: "devicon-react-original colored" },
          { name: "Next.js", icon: <SiNextdotjs size={35} /> },
          { name: "Node.js", icon: "devicon-nodejs-plain colored" },
          { name: "AI", icon: <SiOpenai size={35} /> },
          {
            name: "Vercel",
            icon: <SiVercel size={35} />,
          },
        ],
        struggles: (
            <>
            The main challenges included integrating{" "}
            <strong>AI-driven recommendations</strong> for career guidance, building a
            scalable backend using <strong>Node.js</strong> and{" "}
            <strong>Express</strong>, and ensuring smooth{" "}
            <strong>MongoDB schema design</strong> for storing user data, resumes, and
            interview prep results. Another major challenge was maintaining{" "}
            <strong>SEO optimization</strong> while using{" "}
            <strong>Next.js</strong> for dynamic content, and creating an intuitive UI
            that balances simplicity for job seekers and depth for advanced users.
            </>
        ),
        whatWouldIChange: (
            <>
            If I were to start over, I would plan the{" "}
            <strong>AI integration pipeline</strong> earlier, ensuring a more modular
            approach for adding new AI models and APIs. I would also invest more time
            in <strong>database schema planning</strong> to better handle resume
            versions and user progress tracking. Additionally, I would establish a{" "}
            <strong>design system with reusable components</strong> from the start to
            speed up UI development and maintain consistency across the platform.
            </>
        ),
        futurePlans: (
            <>
            Future plans include expanding{" "}
            <strong>AI-driven interview simulations</strong>, providing deeper{" "}
            <strong>industry-specific insights</strong>, improving the{" "}
            <strong>resume builder</strong> with customizable templates, and adding{" "}
            <strong>collaboration features</strong> for mentors and peers. I also plan
            to integrate <strong>third-party job boards</strong>, enhance{" "}
            <strong>SEO performance</strong>, and include more{" "}
            <strong>AI-powered analytics</strong> to help users track career growth.
            </>
        ),
    },
    xyress: {
      logo: "xyress",
      name: "Xyress",
      websiteLink: "https://xyress.com/",
      image: {
          src: "/xyress.png",
          alt: "Xyress web app image",
          width: 1150,
          height: 821,
      },
      description: (
        <>
          Xyress is a cutting-edge <strong>decentralized platform</strong> with a primary mission to facilitate the transition from <strong>Web 2.0 to Web 3.0</strong>. It focuses on leveraging <strong>blockchain technology</strong>, <strong>artificial intelligence (AI)</strong>, and the <strong>Metaverse</strong> to create a secure, decentralized, and user-centric internet experience. The website highlights Xyress’s ecosystem, which includes pioneering solutions like <strong>Xyress Nexa</strong>, <strong>Xyress Connect</strong>, <strong>Xyress Scan</strong>, and <strong>Xyress Wallet</strong>, designed to ignite digital evolution.
        </>
      ),
      technologies: [
        { name: "React.js", icon: "devicon-react-original colored" }, 
        { name: "Next.js", icon: <SiNextdotjs size={35} /> }, 
        { name: "Node.js", icon: "devicon-nodejs-plain colored" }, 
        { name: "Express.js", icon: "devicon-express-original colored" }, 
        { name: "Cloudflare", icon: <CloudflareIcon /> },
        { name: "MUI", icon: <MUIIcon /> },
      ],
      struggles: (
        <>
          The key challenges involve ensuring <strong>interoperability</strong> and <strong>governance</strong> across decentralized systems, maintaining <strong>high security standards</strong> for digital assets and transactions, and facilitating widespread <strong>Web 3.0 adoption</strong>. Building a resilient and adaptable infrastructure, like Ivalice, to support continuous innovation and scalability was a core technical goal.
        </>
      ),
      whatWouldIChange: (
        <>
          If I were to start again, I’d focus on accelerating the deployment of core ecosystem components like <strong>Xyress Nexa</strong> and <strong>Xyress Connect</strong> to gain early user feedback. I’d also establish clearer, more explicit protocols for <strong>community-driven governance</strong> and implement a structured tokenomics system early to incentivize network participation.
        </>
      ),
      futurePlans: (
        <>
          Future improvements center on the rollout of the full <strong>Xyress Ecosystem</strong>, including the launch of <strong>Xyress Wallet</strong> for secure Web 3.0 interaction and <strong>Xyress Scan</strong> for blockchain transparency. Xyress plans to expand its integration of <strong>AI</strong> within its infrastructure and continue building the global <strong>open-source community</strong> to foster decentralized application development and Metaverse experiences.
        </>
      ),
    },
    knnect: {
        logo: "knnect",
        name: "Knnect",
        websiteLink: "https://knnect.ai/",
        image: {
            src: "/knnect.png",
            alt: "Knnect web app image",
            width: 1150,
            height: 821,
        },
        description: (
          <>
            Knnect AI is an AI-driven educational technology (EdTech) platform that provides a personalized learning experience through AI Teachers. It offers interactive lessons, real-time quizzes, and personalized feedback to help students master any subject. The platform adapts to the user's learning pace, providing tailored explanations, hints, and 24/7 support to make even complex concepts understandable. Knnect is designed for all age groups, focusing on transforming learning through AI-driven personalization and interactive courses.
          </>
        ),
        technologies: [
          {
            name: "Tailwind CSS",
            icon: <SiTailwindcss size={35} />,
          },
          { name: "React.js", icon: "devicon-react-original colored" },
          { name: "Redux", icon: "devicon-redux-original colored" },
          { name: "Cloudflare", icon: <CloudflareIcon /> },
          { 
            name: "LottieFiles", 
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="30" height="30" fill="none" id="lottiefiles">
                <clipPath id="a">
                  <path d="M0 0h400v400H0z"></path>
                </clipPath>
                <g clipPath="url(#a)">
                  <path fill="#00ddb3" d="M298.783 0H101.217C45.317 0 0 45.317 0 101.217v197.566C0 354.683 45.316 400 101.217 400h197.566C354.683 400 400 354.683 400 298.783V101.217C400 45.317 354.683 0 298.783 0z"></path>
                  <path fill="#fff" d="M304.035 89.598c-68.951 0-94.382 49.158-114.885 88.663l-13.486 25.248c-21.74 41.899-37.964 67.35-79.781 67.35a19.756 19.756 0 0 0-13.995 5.784 19.769 19.769 0 0 0-4.291 21.56 19.758 19.758 0 0 0 10.713 10.702 19.756 19.756 0 0 0 7.573 1.499c68.951 0 94.382-49.158 114.885-88.663l13.405-25.248c21.74-41.899 37.964-67.35 79.781-67.35a19.763 19.763 0 0 0 18.286-12.201 19.77 19.77 0 0 0-4.291-21.56 19.763 19.763 0 0 0-13.995-5.784z"></path>
                </g>
              </svg>
            ) 
          },
          { 
            name: "Google Sign-in", 
            icon: (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                preserveAspectRatio="xMidYMid" 
                viewBox="0 0 256 262" 
                id="google"
                width="30" 
                height="30" 
              >
                <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
              </svg>
            ) 
          }
        ],
        struggles: (
          <>
            The key challenges involve designing <strong>advanced AI algorithms</strong> that can truly understand and adapt to diverse learning styles, ensuring the accuracy and quality of the automated teaching content, and maintaining a <strong>high level of data security and privacy</strong> for student information. Scaling the platform to offer courses across a vast range of subjects and educational levels while keeping the personalized experience intact is also a core focus.
          </>
        ),
        whatWouldIChange: (
          <>
            If I were to start again, I’d prioritize the immediate rollout of a wider variety of core subject courses (like Math and Science) in parallel with the Language courses. I'd also implement more gamification elements and social/community features early on to boost student engagement and retention, leveraging the AI to facilitate personalized collaborative learning.
          </>
        ),
        futurePlans: (
          <>
            Future improvements center on expanding the course catalog, including more STEM and specialized subjects. Knnect plans to enhance its AI Teacher's conversational abilities for even more natural interaction, integrate deeper progress analytics dashboards for parents and educators, and explore the use of Metaverse or VR/AR technology to create even more immersive and engaging interactive learning environments.
          </>
        ),
    },
    DEBT: {
      logo: "DEBT",
      name: "D.E.B.T",
      websiteLink: "https://www.thedebtbox.com/",
      image: {
          src: "/thedebtbox.png",
          alt: "DEBT web app image",
          width: 1150,
          height: 821,
      },
      description: (
        <>
          The Debt Box is a decentralized ecological blockchain technology network that operates within the cryptocurrency sector. Its mission is to link digital currency projects to real-world commodities such as gold, silver, crude oil, and real estate—to add stability to its ecosystem. The platform sells "software mining licenses" or "node licenses" which owners use to receive rewards for contributing to the ecosystem. The DEBT token serves as the central utility and support token for the entire platform.
        </>
      ),
      technologies: [
          { name: "React.js", icon: "devicon-react-original colored" },
          { name: "Redux", icon: "devicon-redux-original colored" },
          { name: "Next.js", icon: <SiNextdotjs size={35} /> },
          { name: "Cloudflare", icon: <CloudflareIcon /> },
          {
            name: "OpenGraph",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                width="35"
                height="35"
                fill="currentColor"
              >
                <path d="M499 245q-3 0 -162 92l-159 92l-17 -10q-19 -10 -24 -14q-7 -5 -8.5 -10.5t-2 -19t-2.5 -20.5t-8 -15q-20 -26 -52.5 -26t-51.5 25q-15 20 -11.5 47t23.5 42q12 10 33 12t34 -5q9 -4 14 -2.5t27 13.5l29 17v368l339 196l11 -6q75 -44 191.5 -110.5t120 -66.5t27.5 14l23 13v20q0 27 15 44.5t41 21.5q21 2 39 -9t26.5 -30.5t3.5 -39.5q-8 -30 -35.5 -43t-54.5 0q-8 4 -13.5 2.5t-26.5 -12.5l-28 -16v-370l-170 -98q-169 -97 -171 -96zM480 314v96v96h-8q-38 -2 -64.5 -6.5t-26.5 -8t12 -32.5t19.5 -45t27.5 -46t31 -43zM526 324q3 0 8 6q4 5 14 20l5 7q20 29 45 81t20 56q-1 2 -22.5 5t-48.5 5l-26 3v-112v-54q1 -17 5 -17zM590 340l25 15q55 31 107 61.5t52 32.5t-32 13q-81 30 -84 21q-17 -48 -28 -72t-28 -51zM407 344v0.5t-9 14.5q-11 18 -25.5 48t-22.5 53q-10 28 -11 28l-30 -9q-27 -8 -54.5 -18t-27.5 -12.5t90 -54.5q85 -49 90 -50zM65 353q7 0 13.5 4.5t9.5 12t-1.5 18.5t-12.5 13q-22 9 -33 -12q-3 -7 -3.5 -11t3 -10.5t10 -10.5t14.5 -4zM201 484q4 0 31.5 11t61.5 21t35 10.5t-3 29.5l-8 61h-58q-58 0 -60.5 -3t-2 -66.5t3.5 -63.5zM795 485q3 0 4 11t1 54v67h-59q-58 0 -60.5 -2.5t-2.5 -19.5t-4 -43l-5 -26l18 -5q19 -5 59 -19zM630 534l4 24q4 24 5 40l1 17l-75 2l-6 -11q-4 -8 -17 -20.5t-18 -12.5q-1 0 -2 -4.5t-1 -10.5v-15h24q25 0 55 -5zM375 537q9 0 31 2q32 4 53 4h21v14q0 9 -2.5 13t-11.5 9q-6 4 -12.5 11t-9.5 12l-8 15h-78l3 -25q2 -20 5 -36.5t5 -18.5h4zM500 609q9 0 16 5.5t8.5 13.5t-2.5 17t-11 12q-9 4 -12 3q-15 -2 -21 -15t0.5 -24.5t21.5 -11.5zM318 653l2 16l6 45q3 22 1 28.5t-11 6.5q-5 0 -42.5 12t-56.5 20l-20 8l2 -134zM800 653v68q0 68 -1 68l-11 -5q-8 -5 -46 -18t-56 -17l-16 -4l3 -21q3 -21 5 -45l2 -24zM383 653h5h48l8 13q3 6 9.5 12.5t12.5 10.5q9 6 11.5 10t2.5 13v14l-39 2q-40 3 -55 6h-2q-9 2 -12 1t-4.5 -7.5t-3.5 -26.5l-3 -15q-2 -18 -1.5 -23.5t5 -7.5t18.5 -2zM565 653h36q37 0 38.5 3t-2 32t-6.5 39l-2 9l-31 -4q-32 -5 -54 -5h-23v-14q0 -10 2 -14t12 -10q6 -4 12.5 -10.5t9.5 -12.5zM480 764v95q0 95 -2.5 95t-27 -36t-35.5 -59q-15 -28 -25 -54.5t-8 -28.5t26 -5t49 -5zM521 764l23 2q20 1 46.5 5t28.5 5.5t-14.5 40t-28.5 60.5q-19 31 -37 55l-18 24v-192zM340 782l8 25q17 50 44 94q15 25 14 26t-89.5 -50.5t-89 -54t27.5 -13t59 -19.5zM663 784q4 0 22 5q24 7 56.5 19t32.5 14t-23 16l-90 51q-67 39 -67 36.5t8 -13.5q12 -18 29.5 -57t26.5 -67q1 -4 5 -4zM935 866q10 0 17.5 8t8 18.5t-7 18t-18 7t-18 -7.5t-7.5 -17q0 -8 8.5 -17.5t16.5 -9.5z" />
              </svg>
            ),
          },
          {
            name: "Google Font API",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 510 398"
                width="35"
                height="35"
                fill="none"
              >
                <path
                  d="M0 387.4 245.52 2.01l131.6 83.84-192.11 301.55z"
                  fill="#FBBC04"
                />
                <path
                  d="M240.33 0h151.13v387.4H240.33z"
                  fill="#1A73E8"
                />
                <circle
                  cx="83.72"
                  cy="81.35"
                  r="74.91"
                  fill="#EA4335"
                />
                <path
                  d="M499.1 279.76a107.64 107.64 0 0 1-107.64 107.64V172.13a107.64 107.64 0 0 1 107.64 107.63z"
                  fill="#34A853"
                />
                <path
                  d="M391.46 172.13v215.27a107.64 107.64 0 0 1 0-215.27z"
                  fill="#0D652D"
                />
                <path
                  d="M474.3 89.29a82.85 82.85 0 0 1-82.84 82.84V6.44a82.85 82.85 0 0 1 82.84 82.85z"
                  fill="#1A73E8"
                />
                <path
                  d="M391.46 6.44v165.69a82.85 82.85 0 0 1 0-165.69z"
                  fill="#174EA6"
                />
              </svg>
            ),
          }
      ],
      struggles: (
        <>
          The core challenges involve managing the complex technical link between digital assets and tangible physical commodity production, ensuring the stability and liquidity of the DEBT token, and navigating the rapidly evolving regulatory landscape of decentralized finance and tokenized securities. Securing the distributed network of software node operators while maintaining transparency is also a persistent technical requirement.
        </>
      ),
      whatWouldIChange: (
        <>
          If I were to start again, I would prioritize immediate implementation of a fully transparent, immutable smart contract to govern the flow of funds and rewards, providing clear, auditable evidence of the link to real-world revenues. I would also seek explicit legal and regulatory clearance for the "node licenses" model before launch to prevent business disruption.
        </>
      ),
      futurePlans: (
        <>
          Future plans include expanding the ecosystem by launching more commodity-backed projects, enhancing the governance model for node operators, and developing advanced tools to provide users with more detailed, real-time analytics on the performance and physical backing of the various assets within the ecosystem.
        </>
      ),
    },
    makersfund: {
        logo: "makersfund",
        name: "Makers Fund",
        websiteLink: "https://www.makersfund.com/",
        image: {
            src: "/makersfund.png",
            alt: "Makers Fund web app image",
            width: 1150,
            height: 821,
        },
        description: (
          <>
            Makers Fund is a <strong>global venture capital firm</strong> focused on
            advancing the future of <strong>interactive entertainment</strong>. The
            platform highlights the firm’s investment philosophy, supporting
            <strong> founders and innovators</strong> shaping the next generation of
            games, immersive worlds, and interactive experiences. Built with a clean
            and elegant design, the website showcases{" "}
            <strong>portfolio companies</strong>, team members, and thought
            leadership across gaming, technology, and creative ecosystems. Its
            minimalist layout emphasizes <strong>clarity, storytelling, and user
            engagement</strong>, reflecting the brand’s commitment to empowering the
            global creator community.
          </>
        ),
        technologies: [
            { name: "React.js", icon: "devicon-react-original colored" },
            { name: "Redux", icon: "devicon-redux-original colored" },
            { name: "Express.js", icon: "devicon-express-original colored" },
            { name: "Next.js", icon: <SiNextdotjs size={35} /> },
            {
              name: "Three.js",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200 200"
                  width="35"
                  height="35"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                >
                  <g fillRule="evenodd" clipRule="evenodd">
                    <path d="M70.213 200.94L27 26l173.23 49.874z" />
                    <path d="M113.583 50.942l21.591 87.496-86.567-24.945z" />
                    <path d="M92.103 125.36L81.379 81.895l43.008 12.346z" />
                    <path d="M70.651 38.483l10.724 43.465-43.008-12.346z" />
                    <path d="M156.663 63.26l10.724 43.465-43.008-12.346z" />
                    <path d="M92.108 125.39l10.724 43.465-43.008-12.346z" />
                  </g>
                </svg>
              ),
            },
            {
              name: "Google Analytics",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 301112 333331"
                  width="35"
                  height="35"
                  fill="none"
                  style={{ overflow: "visible" }}
                > 
                  <path
                    d="M301110 291619c124 22886-18333 41521-41206 41644-1700 14-3415-82-5101-288-21227-3140-36776-21611-36256-43057V43342c-507-21474 15084-39944 36324-43057 22721-2660 43304 13602 45964 36324 192 1673 288 3346 274 5032v249977z"
                    fill="#f9ab00"
                  />
                  <path
                    d="M41288 250756c22804 0 41288 18484 41288 41288s-18484 41288-41288 41288S0 314848 0 292044s18484-41288 41288-41288zm108630-125126c-22913 1261-40685 20472-40150 43413v110892c0 30099 13246 48364 32649 52258 22393 4539 44209-9928 48748-32320 562-2743 836-5526 822-8323V167124c41-22886-18470-41467-41356-41507-233 0-480 0-713 14z"
                    fill="#e37400"
                  />
                </svg>
              ),
            }
        ],
        struggles: (
          <>
            The primary challenges were ensuring a <strong>refined visual identity</strong> 
            while maintaining <strong>fast performance</strong> and{" "}
            <strong>accessibility</strong> across devices. Balancing minimalist design
            with <strong>content depth</strong> and strong{" "}
            <strong>storytelling elements</strong> was crucial to communicate the
            brand’s credibility and mission. Integrating{" "}
            <strong>smooth animations</strong> and maintaining a consistent brand tone
            across sections were key technical and creative considerations.
          </>
        ),
        whatWouldIChange: (
          <>
            If revisited, I would enhance the site’s{" "}
            <strong>interactive storytelling</strong> by incorporating{" "}
            <strong>data-driven visuals</strong> and subtle micro-interactions.
            Expanding <strong>portfolio filtering</strong> features and{" "}
            <strong>dynamic content modules</strong> could improve user navigation and
            engagement. Additionally, introducing{" "}
            <strong>headless CMS integration</strong> would simplify content updates
            for the team without touching the codebase.
          </>
        ),
        futurePlans: (
          <>
            Future developments include integrating{" "}
            <strong>real-time investment insights</strong> and{" "}
            <strong>interactive data visualization tools</strong> to showcase global
            market trends. Makers Fund also plans to enhance{" "}
            <strong>founder storytelling</strong> with multimedia features and expand
            its <strong>digital ecosystem</strong> to foster deeper connections within
            the interactive entertainment industry.
          </>
        ),
    },
};

const projectSlugs = ["jobGeniusAi", "xyress", "knnect", "DEBT", "makersfund"];

export default function DynamicProjectPage() {
  const router = useRouter();

  if (!router.isReady) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1>Loading Project...</h1>
      </div>
    );
  }

  const currentSlug = router.query.slug;
  const currentIndex = projectSlugs.indexOf(currentSlug);
  const projectData = projectsMap[currentSlug];

  if (!projectData) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1>404 | Project Not Found</h1>
        <p>The project '{currentSlug}' could not be loaded.</p>
      </div>
    );
  }

  const isFirstProject = currentIndex === 0;
  const isLastProject = currentIndex === projectSlugs.length - 1;

  const handleBack = () => {
    if (isFirstProject) {
      router.push("/");
    } else if (currentIndex > 0) {
      const previousSlug = projectSlugs[currentIndex - 1];
      router.push(`/projects/${previousSlug}`);
    }
  };

  const handleForward = () => {
    if (currentIndex >= 0 && currentIndex < projectSlugs.length - 1) {
      const nextSlug = projectSlugs[currentIndex + 1];
      router.push(`/projects/${nextSlug}`);
    } else if (isLastProject) {
      router.push("/archive");
    }
  };
  return (
    <>
     <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title> {projectData.name ?? "Muzammil Shah | Senior Full-Stack Developer & Product Engineer" }</title>
      </Head>
      <Projects
        projectData={projectData}
        handleBack={handleBack}
        handleForward={handleForward}
        isFirstProject={isFirstProject}
        isLastProject={isLastProject}
        />
    </>
  );
}
