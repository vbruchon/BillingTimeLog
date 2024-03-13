'use client'
import { Alert, AlertTitle } from '@/components/ui/alert'
import { AlertTriangle } from 'lucide-react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

type AlertErrorLoginProps = {
    error: string
}
export default function AlertErrorLogin({ error }: AlertErrorLoginProps) {
    return (
        <AlertDialog defaultOpen={true}>
            <AlertDialogContent className="bg-destructive">
                <AlertDialogHeader>
                    <AlertDialogTitle>{error}</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="bg-primary text-primary-foreground hover:scale-105 hover:bg-primary hover:text-primary-foreground">
                        Cancel
                    </AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
