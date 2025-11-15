"use client";
import Button from "@/components/Button";
import Editor from "@/components/Editor";
import Input from "@/components/Input";
import TagCard from "@/components/TagCard";
import { useState } from "react";

function QuestionForm() {
  const [value, setValue] = useState("");
  const [tags, setTags] = useState<string[]>(["react", "vue"]);
  const [newTag, setNewTag] = useState("");
  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTag.trim() !== "") {
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setNewTag("");
      } else {
        alert("Tag already exists");
      }
    }
  };
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Ask A New Question</h1>
      <Input label="Title" text="Describe your question title in short way" />
      <div className="mt-3">
        <Editor
          label="Any Question ?"
          value={value}
          onChange={(val) => setValue(val)}
        />
      </div>
      <Input
        label="Tags"
        text="Please press enter to add a new tag"
        value={newTag}
        onChange={(e) => setNewTag(e.target.value)}
        onKeyDown={handleEnterPress}
      />
      <div className="mt-5 space-x-3">
        {tags.map((tag, i) => (
          <TagCard key={i} href={"/?filter=" + "vue"}>
            {tag}
          </TagCard>
        ))}
      </div>
      <Button>Create</Button>
    </div>
  );
}

export default QuestionForm;
