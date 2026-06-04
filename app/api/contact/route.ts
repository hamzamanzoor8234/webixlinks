import { NextResponse } from "next/server";
import { formatLeadEmail, sendEmail } from "@/lib/email";
import type { ContactFormData } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validation
    if (!data.name || !data.email || !data.company || !data.projectType) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Format & Dispatch email
    const { subject, text, html } = formatLeadEmail(data);
    const result = await sendEmail({ subject, text, html });

    return NextResponse.json({
      success: true,
      message: "Lead processed successfully",
      mode: result.mode,
    });
  } catch (error: any) {
    console.error("API contact submission error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error. Failed to send brief." },
      { status: 500 }
    );
  }
}
