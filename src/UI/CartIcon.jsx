import { ShoppingCartIcon } from "@heroicons/react/16/solid";

function CartIcon() {
	return (
		<div className='flex items-center gap-2 relative cursor-pointer ml-16 md:m-0'>
			<span className='w-3 h-3 rounded-full bg-[#5751E1] absolute -top-[2px] left-[12px] flex items-center justify-center text-white text-[8px]'>
				2
			</span>
			<ShoppingCartIcon width={20} />
			<span className='text-xs'>$0.00</span>
		</div>
	);
}
export default CartIcon;
