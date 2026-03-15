import {
  MapPin,
  MessageCircle,
  Send,
  ThumbsUp,
  MoreVertical,
  Edit,
  Trash2,
} from "lucide-react";
import { memo, useEffect, useState } from "react";
import { formatAnnouncementDate } from "../../../mananger/utils/date";

interface AnnouncementCardProps {
  Initials: string;
  announcerName: string;
  Areas: string[];
  sections: string[];
  likes: number;
  commentsCount?: number;
  content: string;
  imageurl?: string[];
  date: string;
  canManage?: boolean;
}

function AnnouncementCard({
  Initials,
  announcerName,
  Areas,
  sections,
  likes,
  content,
  date,
  commentsCount,
  imageurl,
  canManage,
}: AnnouncementCardProps) {
  const [commentSectionOpen, setCommentSectionOpen] = useState<boolean>(false);
  const [commentsCountState, setCommentsCountState] = useState<number>(
    commentsCount || 0,
  );
  const [comment, setComment] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  const [comments, setComments] = useState<
    { username: string; comment: string }[]
  >([]);
  const handleSendComment = (comment: string) => {
    // Handle sending comment logic here
    console.log("Comment sent:", comment);
    setComments([...comments, { username: "Current User", comment }]);
    setCommentsCountState(commentsCountState + 1);
    setComment("");
  };
  return (
    <div className="flex flex-col h-auto p-5 border border-neutral-400/40 space-y-5 rounded-2xl bg-white w-full">
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-row space-x-2">
          <div className="bg-linear-to-br from-blue-600 to-blue-900 h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
            <span>{Initials}</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="font-semibold text-md">{announcerName}</span>
            <span className="text-neutral-500 text-xs">
              {formatAnnouncementDate(date)}
            </span>
          </div>
        </div>
        {canManage && (
          <div className="relative">
            <button
              onClick={() => setShowOptions(!showOptions)}
              className="p-1 rounded-full hover:bg-neutral-100 transition-colors"
            >
              <MoreVertical className="size-5 text-neutral-500" />
            </button>
            {showOptions && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-neutral-200 z-10 py-1">
                <button
                  className="w-full flex items-center px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                  onClick={() => setShowOptions(false)}
                >
                  <Edit className="size-4 mr-2" />
                  Edit
                </button>
                <div className="h-px bg-neutral-200 my-1 mx-2" />
                <button
                  className="w-full flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  onClick={() => setShowOptions(false)}
                >
                  <Trash2 className="size-4 mr-2" />
                  Delete
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      {/* Area and section */}
      <div className="grid grid-cols-10 gap-2 text-neutral-500 text-sm font-semibold ">
        {/* Area */}
        {Areas &&
          Areas.slice(0, 5).map((area, index) => (
            <div
              key={index}
              className="text-[10px] text-blue-700 bg-blue-500/10 rounded-lg p-1 flex justify-center items-center space-x-1 gap-1 w-full"
            >
              <MapPin className="size-3" />
              <span className="line-clamp-1">{area}</span>
            </div>
          ))}
        {Areas && Areas.length > 5 && (
          <div className="text-[10px] text-blue-700 bg-blue-500/10 rounded-lg p-1 flex justify-center items-center gap-1 w-full">
            <span>{Areas.length - 5} more ...</span>
          </div>
        )}
        {/* Section */}
        {Areas &&
          Areas.length < 2 &&
          sections &&
          sections.slice(0, 5).map((section, index) => (
            <div
              key={index}
              className="text-[10px] text-neutral-500 font-semibold bg-neutral-500/15 rounded-lg p-1 flex items-center gap-1 w-full justify-center"
            >
              <span className="line-clamp-1">{section}</span>
            </div>
          ))}
        {Areas && Areas.length < 2 && sections.length > 10 && sections && (
          <div className="text-[10px] text-neutral-500 font-semibold bg-neutral-500/15 rounded-lg p-1 flex justify-center items-center gap-1 w-full">
            <span>{sections.length - 5} more ...</span>
          </div>
        )}
      </div>

      <div className="text-neutral-500 flex flex-col justify-between h-full space-y-2">
        <p className="text-sm text-gray-700 mt-2">{content}</p>
        {imageurl && imageurl.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3 mb-5">
            {imageurl.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Announcement image ${index + 1}`}
                onClick={() => setSelectedImage(url)}
                className="rounded-lg w-full h-54 object-cover cursor-pointer hover:scale-105 transition-transform duration-200"
              />
            ))}
          </div>
        )}
        <div className="flex flex-row space-x-5 items-center pt-5 border-t border-gray-300/30">
          <div className="flex items-center gap-2">
            <ThumbsUp className="size-4 text-gray-500" />
            <span className="text-xs">{likes}</span>
          </div>
          <div
            className="flex items-center gap-2"
            onClick={() => setCommentSectionOpen(!commentSectionOpen)}
            title="comments"
          >
            <MessageCircle className="size-4 text-gray-500" />
            <span className="text-xs">{commentsCountState}</span>
          </div>
        </div>
        {commentSectionOpen && (
          <div
            className={`relative mt-5 space-y-3 h-fit overflow-scroll overflow-x-hidden`}
          >
            <div className="flex flex-col space-y-3 mb-15">
              {comments ? (
                comments.map((c, i) => (
                  <div key={i} className="flex flex-col space-y-1">
                    <div className="flex items-center gap-2 space-x-2">
                      <div className="bg-linear-to-br from-blue-600 to-blue-900 h-6 w-6 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {c.username.charAt(0)}
                      </div>
                      <span className="text-xs font-semibold">
                        {c.username}
                      </span>
                    </div>
                    <p className="text-xs ml-10">{c.comment}</p>
                  </div>
                ))
              ) : (
                <div> no comments</div>
              )}
            </div>
            <div className="flex flex-row absolute bottom-0 w-full space-x-5">
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                type="text"
                placeholder="Write a comment..."
                className="w-full text-sm border-2 border-neutral-500/30 py-1 px-5 rounded-lg"
              />
              <button
                onClick={() => handleSendComment(comment)}
                disabled={!comment.trim()}
                className={` w-fit p-2 rounded-xl flex items-center justify-center ${!comment.trim() ? "opacity-50 cursor-not-allowed bg-blue-800/40" : "bg-blue-500/70"}`}
                title="send"
              >
                <Send className="size-5 text-white/80" />
              </button>
            </div>
          </div>
        )}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full h-10 w-10 flex items-center justify-center shadow-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(AnnouncementCard);
