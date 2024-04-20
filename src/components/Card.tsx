import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Card1() {
  return (
    <Card className="w-[700px]">
      <CardHeader>
        <CardTitle>Create memory</CardTitle>
        <CardDescription>
          Deploy your new memory to IPFS in one-click.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your photo" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="emotion">Emotion</Label>
              <Select>
                <SelectTrigger id="emotion">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="happy">Happy</SelectItem>
                  <SelectItem value="sad">Sad</SelectItem>
                  <SelectItem value="angry">Angry</SelectItem>
                  <SelectItem value="meh">Meh!</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5 ">
              <Label htmlFor="picture">Picture</Label>
              <Input className="cursor-pointer" id="picture" type="file" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Upload</Button>
        <Button variant="destructive">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
}
