import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
const Card = ({ data }) => {
  const {
    companyLogo,
    companyName,
    jobTitle,
    minPrice,
    maxPrice,
    salaryType,
    employmentType,
    jobLocation,
    postingDate,
    description,
    _id
  } = data;
  return (
    <section className="card">
      <Link to={`/job/${_id}`} className="flex gap-4 flex-col sm:flex-row items-start">
        <img src={companyLogo} alt="" />
        <div>
          <h4 className="text-primary mb-1">{companyName}</h4>
          <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>

          <div className='text-primary/70 text-base flex flex-wrap gap-3 mb-2'>
            <span className="flex items-center gap-2">
              <FiMapPin /> {jobLocation}
            </span>
            <span className="flex items-center gap-2">
              <FiClock /> {employmentType}
            </span>
            <span className="flex items-center gap-2">
              <FiDollarSign /> {minPrice}
            </span>
            <span className="flex items-center gap-2">
              <FiCalendar/> {postingDate}
            </span>
          </div>
          <p className='text-base text-primary/60'>{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
