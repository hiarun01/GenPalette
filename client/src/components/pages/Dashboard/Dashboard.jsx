import {useState} from "react";
import {Button} from "../../ui/button";
const Dashboard = () => {
  const [userPrompt, setUserPrompt] = useState("");

  return (
    <div className="mx-auto max-w-3xl h-auto py-20 flex justify-center flex-col">
      {/* input Area */}
      <div className="mb-10 mx-5">
        <textarea
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          className="border w-full px-2 pt-1 rounded-md font-mono "
          placeholder="Tell us the mood, style, or theme you'd like your color palette to capture."
          rows={10}
        />
      </div>
      <div className="mx-5">
        <Button className="w-full h-12 text-lg">Generate</Button>
      </div>
    </div>
  );
};

export default Dashboard;
