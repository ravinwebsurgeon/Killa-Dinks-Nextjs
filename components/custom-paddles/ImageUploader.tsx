const ImageUploader = ({ getImages, field, id }: any) => {
  return (
    <div>
      <label htmlFor={id} className="">
        <div
          data-v-c419d1c4=""
          className="relative flex h-[250px] sm:h-[calc(100vh-192px)] max-h-screen w-full cursor-pointer flex-col items-center justify-center opacity-70 hover:opacity-100 md:h-[calc(95vh-200px)] md:max-h-[1200px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="#000"
          >
            <path d="M450-328.46v-336l-98.61 98.61-42.16-43.38L480-780l170.77 170.77-42.16 43.38L510-664.46v336h-60ZM252.31-180Q222-180 201-201q-21-21-21-51.31v-108.46h60v108.46q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h455.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-108.46h60v108.46Q780-222 759-201q-21 21-51.31 21H252.31Z" />
          </svg>
          <div className="font-futura text-xl sm:text-2xl font-bold">Upload image</div>
          <div className="font-montaguslab text-sm sm:text-base leading-7">
            Drag and drop or click to upload
          </div>
        </div>
      </label>
      <input
        onChange={(e) => getImages(e, field)}
        type="file"
        id={id}
        accept="image/png, image/jpeg"
        className="hidden"
      />
    </div>
  );
};

export default ImageUploader;
