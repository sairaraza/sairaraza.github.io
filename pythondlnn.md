---
layout: default
---
<head><style>
body {
  font-size: 11px;
  line-height: 1.2;
}

</style></head>

# <center>Notes for NNs</center>

## Vision example with imported dataset in Pytorch

### Prepare data

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

### Building NN
https://www.youtube.com/watch?v=ixathu7U-LQ

#### Import libraries for building NNs

      import torch.nn as nn
      import torch.nn.functional as F

Object oriented programming is in the first one, the second one has specific functions separated.


#### Set framework and initialisation ?
      class Net(nn.Module):

        def_innit_(self):
          super()._init_()

super corresponds to NN.Module init is initialisation for NN .modules and anything else we put in innit.  .. check this Without the superinit you'd get an error

#### Define layers
Define fully connected layers to the NN using
      self.fc1 = nn.Linear(input, output) to each layer
- fc1 is fully connected first layer
- input is images are 28 x28 = 784 pixels
- output can be wahatever we want but we want 3 layers of 64 neurones for our hidden layers so its 64
- nn.Linear means flat fully connected is nn.Con for convolution layers
          self.fc1 = nn.Linear(28*28, 64)

        next layers input has to be 64 but output can anything
          self.fc2 = nn.Linear(64, 64)
          self.fc3 = nn.Linear(64, 64)

Final layer output layer we want 10 for 10 classes defined above in the data.
          self.fc4 = nn.Linear(64, 10)

to check ..
      net = Net()
      print(net)

run
delete these lines when checked

#### Simple feed forward
Define direction using forward(self, input)

  def forward(self, x):

#### Set activation functions

Run F.relu (rectified linear) activation function - whether or not the neuron is firing  - the valve. keeps the outputs of the layers going into huge numbers. Loss explosions). Runs on the output value.

        x = F.relu(self.fc1(x))
        x = F.relu(self.fc2(x))
        x = F.relu(self.fc3(x))

You can do fancy things here like ifs and elses.
        if weather=sunny:
            x=...
        else: .....
 etc

#### Output definition

The output we want is a probability distribution of classes not a yes no result.
        x = (self.fc4(x))
- for multi class we use log_softmax
- dim1 is for distributing across output layer tensors - i think to do with dimension
        return F.log_softmax(x, dim=1)


    net = Net()
    print(net)

run and you should get

Net(
(fc1): linear(in_features=786, out_features=64, bias=True)
(fc2): linear(in_features=64, out_features=64, bias=True)
(fc3): linear(in_features=64, out_features=64, bias=True)
(fc4): linear(in_features=64, out_features=10, bias=True)
)

#### Pass data through

try random number

      X = torch.rand((28,28))

view function lets us work with numbers without worrying about the size.In this library -1 specifies that the input will be of an unknown shape.
      X = X.view(-1,28*28)

Run the net on X
      output = net (X)
gives prediction distribution
tensor([[-2.2978, -2.3324, -2.3364, etc etc for 10 ]], grad_fn=<LogSoftmaxBackward>)

first few passes are not meaningful but it works.
we havent initialised weights randomly yet though

gradient function  grad_fn=<LogSoftmaxBackward>
next we calculate how far off we are




[back](./)
