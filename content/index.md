---
title: Hotel Fairness
description: Liveness, Fairness, and Hilbert's Hotel.
---


# Hotel Fairness


It is pointless to ask what corresponds to someone's intuition of what  
fairness means.  We are concerned with specifying systems, not reading  
people's minds.  The concept of fairness in this context has been  
discussed since the 70s.  In 1986 Nissim Francez published a book  
titled "Fairness".  One of the strengths of TLA is that it is the only  
formalism I know of capable of simply and elegantly expressing what  
computer scientists have meant by fairness.  
  
   So how can I explain intuitively where their intuitions have led them

   astray or at least are different to the notion of fairness embedded in  
   PlusCal / TLA+?

People have difficulty understanding fairness and, more generally,  
liveness.  I suspect that this stems from not having a good  
understanding of quantification, so they can't immediately "feel in  
their gut" the difference between \A x : \E y and \E y : \A x.  But  
for whatever reason, you should expect that you and your students will  
have difficulty with fairness. 


The fundamental reason fairness, and liveness
in general, are hard to understand is that they are properties of
infinite behaviors, and people have trouble understanding the
infinite.  For example, their minds are usually blown by "Hilbert's
hotel", which is always full but always has room for another guest
because it has an infinite number of rooms.  (You can look it up on
the web.)
