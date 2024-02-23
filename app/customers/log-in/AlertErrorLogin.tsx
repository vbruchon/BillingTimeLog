'use client'
import { Alert, AlertTitle } from '@/components/ui/alert'
import { AlertTriangle } from 'lucide-react'
import React from 'react'

type AlertErrorLoginProps = {
    error: string
}
export default function AlertErrorLogin({ error }: AlertErrorLoginProps) {
    return (
        <Alert className="m-auto mt-8 w-2/6 bg-destructive">
            <div className="flex items-center justify-center gap-4">
                <AlertTriangle className="size-12" />
                <AlertTitle className="text-center text-xl">{error}</AlertTitle>
            </div>
        </Alert>
    )
}
