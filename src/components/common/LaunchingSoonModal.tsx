import React from 'react';
import { IoClose } from 'react-icons/io5';

interface LaunchingSoonModalProps {
	isOpen: boolean;
	heading?: string;
	text?: string;
	onClose: () => void;
}

const LaunchingSoonModal: React.FC<LaunchingSoonModalProps> = ({
	isOpen,
	heading,
	text,
	onClose,
}) => {
	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in'>
			<div className='relative bg-white rounded-lg p-8 max-w-md w-full text-center shadow-2xl animate-scale-up'>
				{/* Close Button */}
				<button
					onClick={onClose}
					className='absolute top-4 right-4 text-gray-500 hover:text-navy transition-colors'
					aria-label='Close modal'
				>
					<IoClose size={24} />
				</button>

				{/* Content */}
				<div className='space-y-4'>
					<h3 className='text-3xl font-serif text-navy'>
						{heading ? heading : ''}
					</h3>
					{text ? (
						<p className='text-gray-600 font-sans'>{text || ''}</p>
					) : null}
					<button
						onClick={onClose}
						className='mt-6 px-6 py-2 bg-navy text-white font-sans rounded-full hover:bg-navy/90 transition-colors'
					>
						Got it
					</button>
				</div>
			</div>
		</div>
	);
};

export default LaunchingSoonModal;
