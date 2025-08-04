    //  {/* Order Form */}
    //   <section id="order-form" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-100 via-slate-100 to-stone-200 relative">
    //     <motion.div 
    //       className="absolute inset-0 opacity-20"
    //       animate={{ 
    //         backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
    //       }}
    //       transition={{ 
    //         duration: 25, 
    //         repeat: Infinity, 
    //         ease: "linear"
    //       }}
    //       style={{
    //         backgroundImage: `conic-gradient(from 0deg at 30% 70%, rgba(239,68,68,0.1) 0deg, transparent 120deg, rgba(16,185,129,0.1) 240deg, transparent 360deg)`
    //       }}
    //     />
        
    //     <div className="container mx-auto px-4 relative z-10">
    //       <div className="max-w-4xl mx-auto">
    //         <motion.div 
    //           className="bg-white rounded-2xl shadow-2xl overflow-hidden"
    //           initial={{ opacity: 0, y: 50 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           viewport={{ once: true, amount: 0.1 }}
    //           transition={{ duration: 0.8 }}
    //         >
    //           <motion.div 
    //             className="bg-gradient-to-r from-red-600 via-red-700 to-rose-800 text-white p-6 sm:p-8 text-center relative overflow-hidden"
    //             initial={{ opacity: 0, y: -30 }}
    //             whileInView={{ opacity: 1, y: 0 }}
    //             viewport={{ once: true }}
    //             transition={{ delay: 0.2, duration: 0.6 }}
    //           >
    //             <motion.div
    //               className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
    //               animate={{ x: ["-100%", "100%"] }}
    //               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    //             />
    //             <h2 className="text-2xl sm:text-3xl font-bold mb-2 relative z-10">PLACE ORDER YOUR BELOW...</h2>
    //             <p className="text-base sm:text-lg opacity-90 relative z-10">Fill the form below to complete your order</p>
    //           </motion.div>

    //           <motion.div 
    //             className="p-6 sm:p-8"
    //             initial={{ opacity: 0 }}
    //             whileInView={{ opacity: 1 }}
    //             viewport={{ once: true }}
    //             transition={{ delay: 0.4, duration: 0.6 }}
    //           >
    //             <form onSubmit={handleOrderSubmit} className="space-y-6">
    //               <motion.div 
    //                 className="grid sm:grid-cols-2 gap-6"
    //                 variants={staggerContainer}
    //                 initial="initial"
    //                 whileInView="animate"
    //                 viewport={{ once: true }}
    //               >
    //                 <motion.div variants={fadeInUp}>
    //                   <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
    //                     YOUR FULL NAME *
    //                   </label>
    //                   <motion.input
    //                     type="text"
    //                     required
    //                     value={orderForm.fullName}
    //                     onChange={(e) => setOrderForm({...orderForm, fullName: e.target.value})}
    //                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-all duration-300 hover:border-gray-400"
    //                     placeholder=""
    //                     whileFocus={{ scale: 1.02 }}
    //                   />
    //                 </motion.div>

    //                 <motion.div variants={fadeInUp}>
    //                   <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
    //                     YOUR PHONE NUMBER(S) *
    //                   </label>
    //                   <motion.input
    //                     type="tel"
    //                     required
    //                     value={orderForm.phone}
    //                     onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
    //                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-all duration-300 hover:border-gray-400"
    //                     placeholder=""
    //                     whileFocus={{ scale: 1.02 }}
    //                   />
    //                   <p className="text-xs text-gray-500 mt-1">
    //                     IF YOU HAVE MORE THAN 1 NUMBER THEN SEPERATE WITH COMMA(,).
    //                   </p>
    //                 </motion.div>
    //               </motion.div>

    //               <motion.div
    //                 initial={{ opacity: 0, y: 20 }}
    //                 whileInView={{ opacity: 1, y: 0 }}
    //                 viewport={{ once: true }}
    //                 transition={{ delay: 0.1, duration: 0.6 }}
    //               >
    //                 <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
    //                   ALTERNATIVE/WHATSAPP PHONE NUMBER
    //                 </label>
    //                 <motion.input
    //                   type="tel"
    //                   value={orderForm.whatsappPhone}
    //                   onChange={(e) => setOrderForm({...orderForm, whatsappPhone: e.target.value})}
    //                   className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-all duration-300 hover:border-gray-400"
    //                   placeholder=""
    //                   whileFocus={{ scale: 1.02 }}
    //                 />
    //                 <p className="text-xs text-gray-500 mt-1">
    //                   NUMBER WE CAN REACH ON WHATSAPP. THIS CAN BE YOUR WIFE'S, HUSBAND OR ANYBODY CLOSE TO YOU.
    //                 </p>
    //               </motion.div>

    //               <motion.div
    //                 initial={{ opacity: 0, y: 20 }}
    //                 whileInView={{ opacity: 1, y: 0 }}
    //                 viewport={{ once: true }}
    //                 transition={{ delay: 0.2, duration: 0.6 }}
    //               >
    //                 <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
    //                   FULL DELIVERY ADDRESS *
    //                 </label>
    //                 <motion.input
    //                   type="text"
    //                   required
    //                   value={orderForm.address}
    //                   onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
    //                   className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-all duration-300 hover:border-gray-400"
    //                   placeholder=""
    //                   whileFocus={{ scale: 1.02 }}
    //                 />
    //                 <p className="text-xs text-gray-500 mt-1">
    //                     PLEASE INDICATE ANY POPULAR LANDMARK.
    //                   </p>
    //               </motion.div>

    //               <motion.div 
    //                 className="grid sm:grid-cols-2 gap-6"
    //                 initial={{ opacity: 0, y: 20 }}
    //                 whileInView={{ opacity: 1, y: 0 }}
    //                 viewport={{ once: true }}
    //                 transition={{ delay: 0.3, duration: 0.6 }}
    //               >
    //                 <div>
    //                   <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
    //                     CITY *
    //                   </label>
    //                   <motion.input
    //                     type="text"
    //                     required
    //                     value={orderForm.city}
    //                     onChange={(e) => setOrderForm({...orderForm, city: e.target.value})}
    //                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-all duration-300 hover:border-gray-400"
    //                     placeholder=""
    //                     whileFocus={{ scale: 1.02 }}
    //                   />
    //                 </div>

    //                 <div>
    //                   <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
    //                     STATE *
    //                   </label>
    //                   <motion.input
    //                     type="text"
    //                     required
    //                     value={orderForm.state}
    //                     onChange={(e) => setOrderForm({...orderForm, state: e.target.value})}
    //                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-all duration-300 hover:border-gray-400"
    //                     placeholder=""
    //                     whileFocus={{ scale: 1.02 }}
    //                   />
    //                 </div>
    //               </motion.div>

    //               <motion.div
    //                 initial={{ opacity: 0, y: 20 }}
    //                 whileInView={{ opacity: 1, y: 0 }}
    //                 viewport={{ once: true }}
    //                 transition={{ delay: 0.4, duration: 0.6 }}
    //               >
    //                 <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
    //                   KINDLY SELECT YOUR DESIRED PACKAGE *
    //                 </label>
    //                 <div className="space-y-3">
    //                   {packages.map((pkg) => (
    //                     <motion.label 
    //                       key={pkg.id} 
    //                       className="flex items-center cursor-pointer p-3 rounded-lg border-2 border-transparent hover:border-red-200 hover:bg-red-50 transition-all duration-300"
    //                       whileHover={{ scale: 1.02, x: 5 }}
    //                     >
    //                       <input
    //                         type="radio"
    //                         name="package"
    //                         value={pkg.id}
    //                         checked={orderForm.package === pkg.id}
    //                         onChange={(e) => setOrderForm({...orderForm, package: e.target.value})}
    //                         className="mr-3 text-red-500 focus:ring-red-500 w-4 h-4"
    //                       />
    //                       <span className="text-gray-700 font-medium">
    //                         1 Camping Gas, {pkg.id === 'regular' ? '1' : pkg.id === 'silver' ? '2' : '3'} Cylinder = ₦{pkg.price}
    //                         {pkg.popular && ' (Popular Choice)'}
    //                         {pkg.id === 'family' && ' (Highly Recommended Family)'}
    //                       </span>
    //                     </motion.label>
    //                   ))}
    //                 </div>
    //               </motion.div>

    //               <motion.div
    //                 initial={{ opacity: 0, y: 20 }}
    //                 whileInView={{ opacity: 1, y: 0 }}
    //                 viewport={{ once: true }}
    //                 transition={{ delay: 0.5, duration: 0.6 }}
    //               >
    //                 <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
    //                   ARE YOU AVAILABLE TO RECEIVE YOUR ORDER WITHIN 24-48HRS? *
    //                 </label>
    //                 <div className="space-y-2">
    //                   <motion.label 
    //                     className="flex items-center cursor-pointer p-3 rounded-lg border-2 border-transparent hover:border-green-200 hover:bg-green-50 transition-all duration-300"
    //                     whileHover={{ scale: 1.02, x: 5 }}
    //                   >
    //                     <input
    //                       type="radio"
    //                       name="availability"
    //                       value="yes"
    //                       className="mr-3 text-red-500 focus:ring-red-500 w-4 h-4"
    //                       required
    //                     />
    //                     <span className="text-gray-700 font-medium">YES</span>
    //                   </motion.label>
    //                   <motion.label 
    //                     className="flex items-center cursor-pointer p-3 rounded-lg border-2 border-transparent hover:border-red-200 hover:bg-red-50 transition-all duration-300"
    //                     whileHover={{ scale: 1.02, x: 5 }}
    //                   >
    //                     <input
    //                       type="radio"
    //                       name="availability"
    //                       value="no"
    //                       className="mr-3 text-red-500 focus:ring-red-500 w-4 h-4"
    //                       required
    //                     />
    //                     <span className="text-gray-700 font-medium">NO</span>
    //                   </motion.label>
    //                 </div>
    //               </motion.div>

    //               <motion.div 
    //                 className="border-t pt-6"
    //                 initial={{ opacity: 0, y: 20 }}
    //                 whileInView={{ opacity: 1, y: 0 }}
    //                 viewport={{ once: true }}
    //                 transition={{ delay: 0.6, duration: 0.6 }}
    //               >
    //                 <motion.div 
    //                   className="bg-gradient-to-br from-gray-50 to-slate-100 p-6 rounded-lg mb-6 shadow-inner"
    //                   whileHover={{ scale: 1.01 }}
    //                 >
    //                   <h3 className="font-bold text-lg mb-4">Order Summary</h3>
    //                   <div className="space-y-2">
    //                     <div className="flex justify-between text-sm sm:text-base">
    //                       <span>{packages.find(p => p.id === orderForm.package)?.name} Package</span>
    //                       <span className="font-bold">₦{packages.find(p => p.id === orderForm.package)?.price}</span>
    //                     </div>
    //                     <div className="flex justify-between text-green-600 text-sm sm:text-base">
    //                       <span>Delivery</span>
    //                       <span className="font-bold">FREE</span>
    //                     </div>
    //                     <div className="border-t border-gray-300 pt-2">
    //                       <div className="flex justify-between text-lg font-bold">
    //                         <span>Total</span>
    //                         <span>₦{packages.find(p => p.id === orderForm.package)?.price}</span>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </motion.div>

    //                 <motion.button
    //                   type="submit"
    //                   className="w-full bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-lg shadow-lg transition-all duration-300 uppercase relative overflow-hidden"
    //                   whileHover={{ scale: 1.02 }}
    //                   whileTap={{ scale: 0.98 }}
    //                 >
    //                   <motion.span
    //                     className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
    //                     initial={{ x: "-100%" }}
    //                     whileHover={{ x: "100%" }}
    //                     transition={{ duration: 0.8 }}
    //                   />
    //                   <span className="relative z-10">Click Here To Order</span>
    //                 </motion.button>

    //                 {/* <p className="text-center text-xs sm:text-sm text-gray-500 mt-4">
    //                   By clicking the button above, you'll be redirected to our thank you page
    //                 </p> */}
    //               </motion.div>
    //             </form>
    //           </motion.div>
    //         </motion.div>
    //       </div>
    //     </div>
    //   </section>