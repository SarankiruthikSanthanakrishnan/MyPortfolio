import { useEffect } from 'react';
import {
  Download,
  Linkedin,
  Github,
  Instagram,
  LinkedinIcon,
  GithubIcon,
} from 'lucide-react';
import Saran from '../assets/saran.jpg';
// Home styles migrated to Tailwind; removed Home.css import
import Footer from './Footer';
import CV from '../assets/Resume.pdf';

const SkillBar = ({ percent }) => (
  <div className="w-full bg-gray-700 rounded h-6">
    <div className="h-6 bg-cyan-500 rounded" style={{ width: percent }} />
  </div>
);

const Home = () => {
  useEffect(() => {
    document.title = 'Sarankiruthik | Home';
  }, []);

  return (
    <>
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">
              SARAN KIRUTHIK S S
            </h1>
            <p className="text-gray-400 mt-2">
              B.Tech | Artificial Intelligence And Data Science
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-3 items-start">
            <div className="flex flex-col items-center md:items-start gap-4">
              <img
                src={Saran}
                alt="my-photo"
                className="rounded-full shadow-xl w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 object-cover"
              />

              <a
                href={CV}
                download="SARAN KIRUTHik S S"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-5 py-2 rounded hover:bg-green-400 transition"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

            <div className="md:col-span-2 bg-slate-800 rounded p-6">
              <h2 className="text-xl font-semibold mb-3">About me</h2>
              <p className="text-sm text-gray-200 text-justify">
                I am a passionate and dedicated student, embarking on an
                academic journey fueled by curiosity and a relentless pursuit of
                knowledge. Currently pursuing{' '}
                <strong className="text-cyan-300">
                  B.TECH - Artificial Intelligence and Data Science at Gnanamani
                  College of Technology, Namakkal
                </strong>
                , I thrive in the dynamic intersection of theory and practical
                application. As an avid learner, I actively engage in both
                coursework and extracurricular activities to broaden my
                perspectives and enhance my skill set. With a keen interest in
                Full-stack Development, I am committed to leveraging my academic
                prowess to contribute meaningfully to the field.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <a
                  className="text-cyan-300 hover:underline"
                  href="https://www.linkedin.com/in/sarankiruthiksanthanakrishnan/"
                >
                  <LinkedinIcon className="w-6 h-6" />
                </a>
                <a
                  className="text-cyan-300 hover:underline"
                  href="https://github.com/SarankiruthikSanthanakrishnan"
                >
                  <GithubIcon className="w-6 h-6" />
                </a>
                <a
                  className="text-cyan-300 hover:underline"
                  href="https://www.instagram.com/sarankiruthiksanthanakrishnan"
                >
                  <Instagram />
                </a>
              </div>
            </div>

            {/* Education */}
            <div className="bg-slate-800 rounded p-6 md:col-span-1">
              <h2 className="text-lg font-semibold text-center mb-4">
                Education
              </h2>
              <div className="mb-4">
                <h3 className="font-bold">Gnanamani College of Technology</h3>
                <p className="text-sm">
                  B.Tech - Artificial Intelligence and Data Science
                </p>
                <p className="text-cyan-300 font-semibold">
                  Currently Pursuing
                </p>
                <div className="mt-2 text-sm text-gray-300">CGPA 81.3%</div>
              </div>

              <hr className="border-gray-700 my-3" />

              <div className="mb-4">
                <h3 className="font-bold">S S V Higher Secondary School</h3>
                <p className="text-sm">HSC - Higher Secondary Certificate</p>
                <div className="mt-2 text-sm text-gray-300">84%</div>
              </div>

              <hr className="border-gray-700 my-3" />

              <div>
                <h3 className="font-bold">S S V Higher Secondary School</h3>
                <p className="text-sm">
                  SSLC - Secondary School Leaving Certificate
                </p>
                <div className="mt-2 text-sm text-gray-300">71.2%</div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-slate-800 rounded p-6 md:col-span-2">
              <h2 className="text-lg font-semibold text-center mb-4">Skills</h2>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Python</span>
                    <span>60%</span>
                  </div>
                  <SkillBar percent={'60%'} />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Core Java</span>
                    <span>70%</span>
                  </div>
                  <SkillBar percent={'70%'} />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>C Programming</span>
                    <span>80%</span>
                  </div>
                  <SkillBar percent={'80%'} />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Web Development</span>
                    <span>75%</span>
                  </div>
                  <SkillBar percent={'75%'} />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>JavaScript</span>
                    <span>85%</span>
                  </div>
                  <SkillBar percent={'85%'} />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Git & GitHub</span>
                    <span>85%</span>
                  </div>
                  <SkillBar percent={'85%'} />
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-slate-800 rounded p-6 md:col-span-3">
              <h2 className="text-lg font-semibold text-center mb-4">
                Languages Known
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Tamil</span>
                    <span>100%</span>
                  </div>
                  <SkillBar percent={'100%'} />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>English</span>
                    <span>80%</span>
                  </div>
                  <SkillBar percent={'80%'} />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Hindi</span>
                    <span>20%</span>
                  </div>
                  <SkillBar percent={'20%'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
