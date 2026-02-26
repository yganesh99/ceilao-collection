import React from 'react';
import { IoClose } from 'react-icons/io5';

interface LaunchingSoonModalProps {
	isOpen: boolean;
	heading?: string;
	text?: string;
	onClose: () => void;
}

const LaunchingSoonModal2: React.FC<LaunchingSoonModalProps> = ({
	isOpen,
	heading,
	text,
	onClose,
}) => {
	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in'>
			<div className='relative bg-white rounded-lg p-2 max-w-48 w-full text-center shadow-2xl animate-scale-up border-[#d4af37] border-2'>
				{/* Close Button */}
				<button
					onClick={onClose}
					className='absolute top-2 right-2 text-gray-500 hover:text-navy transition-colors'
					aria-label='Close modal'
				>
					<IoClose size={24} />
				</button>

				{/* Content */}
				<div className='space-y-2'>
					<h3 className='text-3xl font-serif text-navy'>
						{heading ? heading : ''}
					</h3>
					{text ? (
						<p className='text-navy font-sans font-bold text-lg'>
							{text || ''}
						</p>
					) : null}
					<button
						onClick={onClose}
						className='px-4 py-2 bg-navy text-white font-sans rounded-full hover:bg-[#d4af37] transition-colors'
					>
						Got it!
					</button>
				</div>
			</div>
		</div>
	);
};

export default LaunchingSoonModal2;
