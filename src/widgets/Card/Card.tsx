import Image from "next/image";

function Card({ product }: { product: any }) {
  return (
    <div key={product.id}>
      {product.img ? (
        <div>
          <Image
            priority
            width={520}
            height={520}
            src={product.img}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>
      ) : (
        ""
      )}
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h5 className="text-lg text-black font-semibold">{product.name}</h5>
          <p className="text-sm text-[#979797]">$ {product.price}</p>
        </div>
        <p className="mt-2.5 text-sm text-[#979797]">
          {product.ingredents?.map((ing: any, idx: number) => (
            <span key={idx}>{ing} / </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Card;
