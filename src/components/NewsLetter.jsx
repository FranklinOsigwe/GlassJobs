import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";
function NewsLetter() {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText /> Subscribe for more Jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Lorem, ipsum excepturi quae, qui voluptatum temporibus nobis oluta
          fugit nam suscipit?
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@gmail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            className="w-full block py-2 pl-3 border focus:outline-none bg-green rounded-sm text-white cursor-pointer font-semibold"
            type="submit"
            value={"Subscribe"}
          />
        </div>
      </div>
      <div className='mt-20'>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket /> Get Noticed Faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Lorem, ipsum excepturi quae, qui voluptatum temporibus nobis oluta
          fugit nam suscipit?
        </p>
        <div className="w-full space-y-4">

          <input
            className="w-full block py-2 pl-3 border focus:outline-none bg-green rounded-sm text-white cursor-pointer font-semibold"
            type="submit"
            value={"Upload your resume"}
          />
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
