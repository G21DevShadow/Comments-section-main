import type { User } from "../../../store/slice/types/types";

interface props {
  createdAt: string;
  user: User;
}

export function CommentHead({ user, createdAt }: props) {
  return (
    <div className="flex items-center gap-5">
      <img src={user.image} alt="Image user" className="w-10 h-10" />
      <p className="text-Dark-blue font-bold">{user.username}</p>
      {user.username === "juliusomo" && (
        <p className="text-white py-[1px] px-2.5 bg-Moderate-blue rounded-[2px]">
          you
        </p>
      )}
      <p className="text-Grayish-Blue">{createdAt}</p>
    </div>
  );
}
