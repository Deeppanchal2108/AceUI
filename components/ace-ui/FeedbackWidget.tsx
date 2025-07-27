"use client";
import { Angry, Check, Frown, Laugh, Loader2, Smile, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SATISFACTION_LEVELS = [
    {
        level: 4,
        emoji: Laugh,
        color: "text-green-600",
        label: "Excellent",
        hoverColor: "hover:bg-green-50 dark:hover:bg-green-900/20"
    },
    {
        level: 3,
        emoji: Smile,
        color: "text-green-400",
        label: "Good",
        hoverColor: "hover:bg-green-50 dark:hover:bg-green-900/20"
    },
    {
        level: 2,
        emoji: Frown,
        color: "text-yellow-400",
        label: "Fair",
        hoverColor: "hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
    },
    {
        level: 1,
        emoji: Angry,
        color: "text-red-600",
        label: "Poor",
        hoverColor: "hover:bg-red-50 dark:hover:bg-red-900/20"
    },
];

export const FeedbackWidget = () => {
    const commentTextareaRef = useRef<HTMLTextAreaElement>(null);
    const [selectedSatisfactionLevel, setSelectedSatisfactionLevel] = useState<null | number>(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const { submitUserFeedback, isSubmitting, isSuccessfullySubmitted } = useFeedbackSubmission();

    // Clear textarea when satisfaction level is deselected
    useEffect(() => {
        if (!selectedSatisfactionLevel && commentTextareaRef.current) {
            commentTextareaRef.current.value = "";
        }
    }, [selectedSatisfactionLevel]);

    // Handle successful submission
    useEffect(() => {
        let resetFormTimeout: NodeJS.Timeout;
        let hideSuccessTimeout: NodeJS.Timeout;

        if (isSuccessfullySubmitted) {
            setShowSuccessMessage(true);

            // Reset form after 2 seconds
            resetFormTimeout = setTimeout(() => {
                setSelectedSatisfactionLevel(null);
                if (commentTextareaRef.current) {
                    commentTextareaRef.current.value = "";
                }
            }, 2000);

            // Hide success message after 2.2 seconds
            hideSuccessTimeout = setTimeout(() => {
                setShowSuccessMessage(false);
            }, 2200);
        }

        return () => {
            clearTimeout(resetFormTimeout);
            clearTimeout(hideSuccessTimeout);
        };
    }, [isSuccessfullySubmitted]);

    const handleSatisfactionSelect = (level: number) => {
        setSelectedSatisfactionLevel(prev => level === prev ? null : level);
    };

    const handleSubmitFeedback = () => {
        if (!selectedSatisfactionLevel) return;

        const comment = commentTextareaRef.current?.value || "";
        submitUserFeedback(selectedSatisfactionLevel, comment);
    };

    const handleCloseFeedback = () => {
        setSelectedSatisfactionLevel(null);
    };

    return (
        <motion.div
            layout
            initial={{ borderRadius: "2rem" }}
            animate={selectedSatisfactionLevel ? { borderRadius: "0.5rem" } : { borderRadius: "2rem" }}
            className="w-fit overflow-hidden border border-gray-200 bg-white py-2 shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
        >
            {/* Header Section */}
            <div className="flex items-center justify-between pl-4 pr-2">
                <div className="flex items-center gap-3">
                    <div className="text-sm font-medium text-gray-700 dark:text-neutral-300">
                        Tell us what you think!
                    </div>

                    {/* Satisfaction Rating Buttons */}
                    <div className="flex items-center gap-1">
                        {SATISFACTION_LEVELS.map((satisfactionOption) => {
                            const EmojiIcon = satisfactionOption.emoji;
                            const isSelected = selectedSatisfactionLevel === satisfactionOption.level;

                            return (
                                <button
                                    key={satisfactionOption.level}
                                    onClick={() => handleSatisfactionSelect(satisfactionOption.level)}
                                    className={`
                    flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200
                    ${isSelected
                                            ? `${satisfactionOption.color} scale-110 shadow-md`
                                            : `text-gray-400 dark:text-neutral-500 ${satisfactionOption.hoverColor}`
                                        }
                  `}
                                    title={satisfactionOption.label}
                                    aria-label={`Rate as ${satisfactionOption.label}`}
                                >
                                    <EmojiIcon size={18} />
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Close Button (only show when expanded) */}
                {selectedSatisfactionLevel && (
                    <button
                        onClick={handleCloseFeedback}
                        className="flex h-6 w-6 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
                        aria-label="Close feedback form"
                    >
                        <X size={14} />
                    </button>
                )}
            </div>

            {/* Expandable Comment Section */}
            <motion.div
                aria-hidden={!selectedSatisfactionLevel}
                initial={{ height: 0, opacity: 0 }}
                animate={selectedSatisfactionLevel ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden px-4"
            >
                <div className="pt-3">
                    <AnimatePresence mode="wait">
                        {!showSuccessMessage ? (
                            <motion.div
                                key="feedback-form"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-3"
                            >
                                {/* Comment Textarea */}
                                <div>
                                    <label htmlFor="feedback-comment" className="sr-only">
                                        Additional comments
                                    </label>
                                    <textarea
                                        id="feedback-comment"
                                        ref={commentTextareaRef}
                                        placeholder="Tell us more about your experience (optional)"
                                        className="min-h-24 w-80 resize-none rounded-lg border border-gray-200 bg-transparent p-3 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-700 dark:placeholder-neutral-500 dark:focus:border-blue-400"
                                        rows={3}
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-end">
                                    <button
                                        onClick={handleSubmitFeedback}
                                        disabled={isSubmitting}
                                        className={`
                      flex h-10 items-center justify-center rounded-lg px-6 text-sm font-medium transition-all duration-200
                      ${isSubmitting
                                                ? "cursor-not-allowed bg-gray-300 text-gray-500 dark:bg-neutral-700 dark:text-neutral-400"
                                                : "bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:bg-blue-500 dark:hover:bg-blue-600"
                                            }
                    `}
                                        aria-label="Submit feedback"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            "Submit Feedback"
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success-message"
                                variants={successAnimationContainer}
                                initial="hidden"
                                animate="visible"
                                className="flex h-32 w-80 flex-col items-center justify-center gap-3 text-center"
                            >
                                <motion.div
                                    variants={successAnimationItem}
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 shadow-lg dark:bg-green-600"
                                >
                                    <Check strokeWidth={2.5} size={20} className="text-white" />
                                </motion.div>
                                <motion.div variants={successAnimationItem} className="space-y-1">
                                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                        Thank you for your feedback!
                                    </div>
                                    <div className="text-xs text-gray-600 dark:text-neutral-400">
                                        Your input helps us improve our service.
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.div>
    );
};

// Animation variants for success message
const successAnimationContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
            staggerChildren: 0.1,
        },
    },
};

const successAnimationItem = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

// Custom hook for handling feedback submission
const useFeedbackSubmission = () => {
    const [submissionData, setSubmissionData] = useState<{
        satisfactionLevel: number;
        comment: string;
    } | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState<string | null>(null);
    const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

    // Mock API call - replace with actual API endpoint
    const mockFeedbackAPI = () =>
        new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                // Simulate occasional failures for testing
                if (Math.random() > 0.9) {
                    reject(new Error("Network error"));
                } else {
                    resolve();
                }
            }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
        });

    useEffect(() => {
        if (!submissionData) return;

        setIsSubmitting(true);
        setIsSuccessfullySubmitted(false);
        setSubmissionError(null);

        mockFeedbackAPI()
            .then(() => {
                setIsSuccessfullySubmitted(true);
                console.log("Feedback submitted successfully:", submissionData);
            })
            .catch((error) => {
                setSubmissionError(error.message || "Failed to submit feedback");
                console.error("Feedback submission failed:", error);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    }, [submissionData]);

    const submitUserFeedback = (satisfactionLevel: number, comment: string) => {
        setSubmissionData({ satisfactionLevel, comment });
    };

    return {
        submitUserFeedback,
        isSubmitting,
        submissionError,
        isSuccessfullySubmitted,
    };
};