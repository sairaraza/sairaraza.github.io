---
layout: default
---

# <center>Notes for neural networks in Python</center>

## Vision example with imported dataset

#### Download libraries

open JupyterLab (or Anaconda?)
Import torch and datasets for a demo

    import torch
    import torchvision
    from torchvision import transforms, datasets

#### Prepare dataset

You need train and testing data.  Testing data is out of sample testing data - realistic and never seen by the machine. Overfitting.

Use datasets.nameofdataset to define an existing dataset (inputs and outputs).  You can write your own dataset too
Then in brackets:
- where you want data to go, we put "" for locally,
- if you want it to train (this is train=True for training set and False for test dataset)
- if you want to download it (download=True if you do)
- all the other functions (transforms) you want to download from torchvision and apply to the dataset in []. (e.g  To convert to tensor is transforms.ToTensor)


      train = datasets.MNIST("", train=True, download=True,
                            transform = transforms.Compose([transforms.ToTensor()]))

      test = datasets.MNIST("", train=False, download=True,
                            transform = transforms.Compose([transforms.ToTensor()]))


and run (not sure how?)
This gives data downloaded.

#### load dataset into iterative script

- batch size is how many at a time do we want to pass to a model. In deep learning we have millions of samples, it can be more than you can fit on memory. common batch sizes are in base 8 numbers. its always trial and error for neurons per layer though. if you take entire dataset and pass it through, as the model optimises, the machine may learn generalisation but also some arbitrary conections.  We can weed out the arbitrary generalisations by having batches
- shuffle prevents the network training on the last set if all the samples are really similar
you can do all these things yourself.


      trainset = torch.utils.data.dataLoader(train, batch_size=10, shuffle=True)
      testset  = torch.utils.data.dataLoader(train, batch_size=10, shuffle=True)

To iterate one batch once? use a for loop

      for data in trainset:
        print (data)
        break
then run.

you will get ten matrices of handwritten digits and 10 tensors of the result

#### confirm by
whatever the last temporary variable was in the for loop can still be access so we apply to the variable "data" the following
      x, y = data[0][0], data[1][0]
      print(y)

should give tensor(3)

#### visualise
      import matplotlib.pyplot as plt

or in the temrinal not jupyter
      pip install matplotlib

Results are of strange dimensions sometimes so if you use
      print (data [0][0].shape)
result you get in pytorch istorch.Size([1, 28, 28]) and requires a 1  so we can use the .view function

in jupyter
- show the image usingplt.imshow
- use .view to show the image as 28 x 28 (MINST data set is 28 x 28)

      plt.imshow(data[0][0].view(28,28))
      plt.show()


#### Balancing datasets when calculating loss
you can use counter function
      total = 0
      counter_dict = {0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}

for data in trainset:
    Xs, ys = data
    for y in ys:
      counter_dict[int(y)] += 1
      total+=1
    print(counter_dict)  

    run? will give

for i in counter_dict:
      print(f"{i}: {counter_dict[i]/total*100}")")

give % distribution- random would be 10% for 10 numbers so 9-11% is ok.




[back](./)
