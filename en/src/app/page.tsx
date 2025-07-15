import { paths } from "@/routers/paths";
import { redirect } from "next/navigation";

export default function Page() {
  redirect(paths.home);
}
