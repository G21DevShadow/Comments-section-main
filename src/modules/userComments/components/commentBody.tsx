import { type User } from "../../../store/slice/types/types";

interface props {
  content: string;
  createdAt: string;
  user: User;
  handleClick: () => void;
}

export function CommentBody({ content, createdAt, user, handleClick }: props) {
  return (
    <div className="grid w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img src={user.image} alt="Image user" className="w-10 h-10" />
          <p className="text-Dark-blue font-bold">{user.username}</p>
          <p className="text-Grayish-Blue">{createdAt}</p>
        </div>
        <span className="flex items-center gap-2 text-Moderate-blue cursor-pointer fill-Moderate-blue hover:fill-Light-grayish-blue hover:text-Light-grayish-blue duration-200">
          <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
            <path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" />
          </svg>
          <p className="font-bold" onClick={handleClick}>
            Reply
          </p>
        </span>
      </div>
      <span className="self-end max-w-[460px] h-[68px] overflow-auto">
        <p className="text-[15px] text-Grayish-Blue">{content}</p>
      </span>
    </div>
  );
}
