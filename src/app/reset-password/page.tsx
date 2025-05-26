"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { LockKeyhole, CheckCircle, AlertCircle, Eye, EyeOff } from "lucide-react"
import Link from 'next/link'

export default function ResetPassword() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const token = searchParams.get("token")

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordsMatch, setPasswordsMatch] = useState(true)

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("")
    setError("")
    setIsLoading(true)

    if (!passwordsMatch) {
      setError("Passwords do not match.")
      setIsLoading(false)
      return
    }

    try {
      const res = await fetch(`http://localhost:3000/api/users/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      })

      const data = await res.json()

      if (res.ok) {
        setMessage("Password successfully reset. Redirecting to login...")
        setTimeout(() => router.push("admin/login"), 2000)
      } else {
        setError(data.message || "Something went wrong.")
      }
    } catch {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg border-t-4 border-t-[#668E2E]">
        <CardHeader className="space-y-1">
          <div className="mx-auto bg-[#668E2E] w-16 h-16 rounded-full flex items-center justify-center mb-2">
            <LockKeyhole className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-center text-[#232548]">Reset Password</CardTitle>
          <CardDescription className="text-center">Enter your new password below</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleReset} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#232548]">
                New Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter your new password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    // Check if passwords match whenever either password changes
                    setPasswordsMatch(e.target.value === confirmPassword || confirmPassword === "")
                  }}
                  className="border-gray-300 focus:border-[#668E2E] focus:ring-[#668E2E] pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#668E2E]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-[#232548]">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  placeholder="Confirm your new password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                    // Check if passwords match whenever confirm password changes
                    setPasswordsMatch(password === e.target.value || e.target.value === "")
                  }}
                  className={`border-gray-300 focus:border-[#668E2E] focus:ring-[#668E2E] pr-10 ${
                    !passwordsMatch && confirmPassword !== ""
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#668E2E]"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {!passwordsMatch && confirmPassword !== "" && (
                <p className="text-red-500 text-sm flex items-center mt-1">
                  <AlertCircle className="h-4 w-4 mr-1" /> Passwords do not match
                </p>
              )}
            </div>

            {message && (
              <div className="bg-green-50 p-3 rounded-md flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-green-700 text-sm">{message}</p>
              </div>
            )}

            {error && (
              <div className="bg-red-50 p-3 rounded-md flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}
          </form>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleReset}
            disabled={isLoading}
            className="w-full bg-[#668E2E] hover:bg-[#557a25] text-white"
          >
            {isLoading ? "Resetting..." : "Reset Password"}
          </Button>
        </CardFooter>
        <div className="p-4 bg-[#232548]/5 rounded-b-lg">
          <p className="text-center text-sm text-[#232548]">
            Remember your password?{" "}
            <Link href="/admin/login" className="font-medium text-[#668E2E] hover:underline">
              Back to login
            </Link>
          </p>
        </div>
      </Card>
    </div>
  )
}
