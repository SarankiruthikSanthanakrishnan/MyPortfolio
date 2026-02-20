import { useEffect } from 'react';
import CV from '../assets/Resume.pdf';
import { Download, CheckCircle, Award, Trophy } from 'lucide-react';

const Resume = () => {
  useEffect(() => {
    document.title = 'Sarankiruthik | Resume';
  }, []);

  const technicalSkills = [
    'Python',
    'Java',
    'C',
    'HTML',
    'CSS',
    'Bootstrap 5',
    'Powerpoint',
    'SQL',
    'Excel',
    'JavaScript',
    'Git & GitHub',
  ];

  const careers = [
    'Software Developing',
    'Programmer',
    'Web Designing',
    'Full Stack Development',
  ];

  return (
    <>
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">Resume</h1>

            <div className="mt-4 flex justify-center md:justify-end">
              <a
                href={CV}
                download
                className="bg-cyan-400 text-gray-900 font-semibold px-5 py-2 rounded flex items-center gap-2 hover:bg-cyan-300 transition"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="md:col-span-1">
              <iframe
                src="https://maps.google.com/maps?q=Solakkalipalayam,Chennasamudram&t=&z=13&ie=UTF8&iwloc=&output=embed"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="eager"
                title="Google Map Location"
                className="rounded w-full h-40 md:h-60"
              />
            </div>

            <div className="md:col-span-2 bg-slate-800 rounded p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold">Name</div>
                  <div>SARAN KIRUTHIK S S</div>
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div>+91 8072682003</div>
                </div>
                <div className="md:col-span-2">
                  <div className="font-semibold">Address</div>
                  <div>
                    57/3, East Street, Government Hospital Road,
                    Solakkalipalayam, Chennasamudram, Kodumudi, Tamilnadu
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div>
                    <a
                      className="underline text-cyan-300"
                      href="mailto:skiruthik2510@gmail.com"
                    >
                      skiruthik2510@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl text-center font-bold text-cyan-300 mb-4">
              Education
            </h2>
            <div className="overflow-x-auto bg-slate-800 rounded">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left border-b border-gray-700">
                    <th className="px-4 py-2">S.no</th>
                    <th className="px-4 py-2">Degree/Course</th>
                    <th className="px-4 py-2">Institute/College</th>
                    <th className="px-4 py-2">University/Board</th>
                    <th className="px-4 py-2">Percentage/CGPA</th>
                    <th className="px-4 py-2">Year of Passing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-2">1.</td>
                    <td className="px-4 py-2">
                      B.Tech Artificial Intelligence And Data Science
                    </td>
                    <td className="px-4 py-2">
                      GNANMANI COLLEGE OF TECHNOLOGY, A K SAMUDRAM,PACHAL
                    </td>
                    <td className="px-4 py-2">Anna University</td>
                    <td className="px-4 py-2">8.13 CGPA (Upto to 7th sem)</td>
                    <td className="px-4 py-2">Pursuing</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-2">2.</td>
                    <td className="px-4 py-2">HIGHER SECONDARY COURSE</td>
                    <td className="px-4 py-2">
                      SSV HIGHER SECONDARY SCHOOL,KODUMUDI
                    </td>
                    <td className="px-4 py-2">Stateboard</td>
                    <td className="px-4 py-2">84%</td>
                    <td className="px-4 py-2">2022</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">3.</td>
                    <td className="px-4 py-2">
                      SCHOOL SECONDARY LEAVING CERTIFICATE
                    </td>
                    <td className="px-4 py-2">
                      SSV HIGHER SECONDARY SCHOOL ,KODUMUDI
                    </td>
                    <td className="px-4 py-2">Stateboard</td>
                    <td className="px-4 py-2">71.2%</td>
                    <td className="px-4 py-2">2020</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-slate-800 rounded p-4">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                Technical Knowledge
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {technicalSkills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-300" />{' '}
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800 rounded p-4">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                Career Ideas
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {careers.map((c, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-300" />{' '}
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl text-center font-bold text-cyan-300 mb-4">
              Accomplishments
            </h2>
            <div className="bg-slate-800 rounded p-4 text-sm">
              <ul className="space-y-3">
                <li>
                  <Award className="w-4 h-4 inline mr-2 text-yellow-400" />{' '}
                  Attended a workshop on <strong>Mongo DB Atlas</strong> at
                  Muthayammal College (15-April-2023)
                </li>
                <li>
                  <Trophy className="w-4 h-4 inline mr-2 text-yellow-400" /> Won
                  1st prize for <strong>Project Idea Presentation</strong> at
                  Selvam College (05-April-2024)
                </li>
                <li>
                  <Award className="w-4 h-4 inline mr-2 text-yellow-400" />{' '}
                  Attended a workshop on <strong>Web Development</strong> at VR
                  Soft Tech (16-Feb-2025)
                </li>
                <li>
                  <Award className="w-4 h-4 inline mr-2 text-yellow-400" />{' '}
                  Attended a workshop on{' '}
                  <strong>Python Programming (Basic to Advance)</strong> at
                  Tutor Joes (06-July-2025)
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Resume;
