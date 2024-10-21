import { FC } from "react";
import { Props } from "./index.type";

const FormInputField = ({
  label,
  placeholder,
  register,
}: {
  label: string;
  placeholder: string;
  register: any;
}) => (
  <label className="flex flex-col w-full gap-2">
    <span className="tracking-wide capitalize">{label}</span>
    <input
      {...register}
      placeholder={placeholder}
      className="py-2 px-4 rounded-lg border outline-none text-sm bg-[#1f243f] border-[#38435a] placeholder:text-white/50"
    />
  </label>
);

const FormTextArea = ({
  label,
  placeholder,
  register,
}: {
  label: string;
  placeholder: string;
  register: any;
}) => (
  <label className="flex flex-col w-full gap-2">
    <span className="tracking-wide capitalize">{label}</span>
    <textarea
      {...register}
      placeholder={placeholder}
      rows={4}
      className="py-2 px-4 rounded-lg border outline-none text-sm bg-[#1f243f] border-[#38435a] placeholder:text-white/50"
    />
  </label>
);

const AddPostForm: FC<Props> = ({
  onSubmit,
  isSubmitDisabled,
  loading,
  register,
}) => (
  <form
    onSubmit={onSubmit}
    className="flex items-center justify-center w-full"
  >
    <div className="w-full max-w-sm rounded-xl md:max-w-md">
      <div className="flex flex-col gap-4 p-8 bg-gradient-to-b w-full border from-[#1b2139] to-[#121628] rounded-xl border-[#38435a]">
        <p className="text-xl font-bold text-center">Add Post</p>

        <FormInputField
          label="Title"
          placeholder="Input title"
          register={register("title")}
        />
        <FormTextArea
          label="Body"
          placeholder="Input body"
          register={register("body")}
        />

        <button
          type="submit"
          disabled={isSubmitDisabled || loading}
          className="w-full p-2 rounded-lg bg-[#137cea] disabled:opacity-50 font-medium tracking-wide text-white mt-2"
        >
          Submit
        </button>
      </div>
    </div>
  </form>
);

export default AddPostForm;
